import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { createFormRateLimit, emailSubject, escapeHtml, formError, isEmail, isOptionalText, isText, readPublicForm } from "@/lib/public-form";

export const dynamic = "force-dynamic";
const limitRequests = createFormRateLimit(20, 60_000);

type ContactBody = {
  nom?: string;
  organisation?: string;
  email?: string;
  telephone?: string;
  profil?: string;
  typeProjet?: string;
  echeance?: string;
  budget?: string;
  message?: string;
  optIn?: boolean;
};

export async function POST(request: Request) {
  const parsed = await readPublicForm(request);
  if (parsed instanceof Response) return parsed;
  const body = parsed as ContactBody;

  if (!isText(body.nom, 200) || !isText(body.message, 8_000) || body.optIn !== true) {
    return formError("Veuillez renseigner correctement les champs obligatoires.", 400);
  }
  if (!isEmail(body.email)) {
    return formError("Veuillez saisir une adresse email valide.", 400);
  }
  const optionalFields = [body.organisation, body.telephone, body.profil, body.typeProjet, body.echeance, body.budget];
  if (!optionalFields.every((value) => isOptionalText(value, 200))) {
    return formError("Un champ de la demande est invalide.", 400);
  }
  const retry = limitRequests();
  if (retry) return retry;

  const resendKey = process.env.RESEND_API_KEY || "";
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  let saved = false;
  let notified = false;

  if (supabaseUrl && serviceRoleKey) {
    try {
      const supabase = createClient(supabaseUrl, serviceRoleKey);
      const { error } = await supabase.from("leads").insert({
        nom: body.nom,
        email: body.email,
        entreprise: body.organisation || null,
        opt_in: true,
      });
      saved = !error;
    } catch {
      saved = false;
    }
  }

  if (resendKey) {
    try {
      const resend = new Resend(resendKey);
      const from = process.env.RESEND_FROM_EMAIL || "ILOCAP <onboarding@resend.dev>";
      const to = process.env.CONTACT_NOTIFICATION_EMAIL || "candriatiana@gmail.com";
      const safe = {
        nom: escapeHtml(body.nom),
        organisation: escapeHtml(body.organisation || "Non précisée"),
        email: escapeHtml(body.email),
        telephone: escapeHtml(body.telephone || "Non précisé"),
        profil: escapeHtml(body.profil || "Non précisé"),
        typeProjet: escapeHtml(body.typeProjet || "À définir ensemble"),
        echeance: escapeHtml(body.echeance || "À préciser"),
        budget: escapeHtml(body.budget || "À conseiller"),
        message: escapeHtml(body.message).replaceAll("\n", "<br />"),
      };

      const { error } = await resend.emails.send({
        from,
        to,
        replyTo: body.email,
        subject: emailSubject(`[ILOCAP] Nouvelle demande de devis — ${body.typeProjet || "Prise de contact"}`),
        html: `
          <div style="background:#F3F1EC;padding:32px;font-family:Arial,sans-serif;color:#073642">
            <div style="max-width:680px;margin:auto;background:#fff;border:1px solid #ddd;padding:32px">
              <p style="color:#B89A5A;text-transform:uppercase;font-size:12px;letter-spacing:2px">Nouvelle demande entrante</p>
              <h1 style="font-size:24px;margin:12px 0 28px">${safe.typeProjet}</h1>
              <table style="width:100%;border-collapse:collapse;font-size:14px">
                <tr><td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold">Nom</td><td style="padding:10px;border-bottom:1px solid #eee">${safe.nom}</td></tr>
                <tr><td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold">Organisation</td><td style="padding:10px;border-bottom:1px solid #eee">${safe.organisation}</td></tr>
                <tr><td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold">Email</td><td style="padding:10px;border-bottom:1px solid #eee">${safe.email}</td></tr>
                <tr><td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold">Téléphone</td><td style="padding:10px;border-bottom:1px solid #eee">${safe.telephone}</td></tr>
                <tr><td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold">Profil</td><td style="padding:10px;border-bottom:1px solid #eee">${safe.profil}</td></tr>
                <tr><td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold">Échéance</td><td style="padding:10px;border-bottom:1px solid #eee">${safe.echeance}</td></tr>
                <tr><td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold">Budget</td><td style="padding:10px;border-bottom:1px solid #eee">${safe.budget}</td></tr>
              </table>
              <div style="margin-top:24px;padding:20px;background:#F3F1EC;line-height:1.6"><strong>Besoin exprimé</strong><br /><br />${safe.message}</div>
            </div>
          </div>
        `,
      });
      notified = !error;
    } catch {
      notified = false;
    }
  }

  if (!saved && !notified) {
    return Response.json({ success: false, error: "Le service est momentanément indisponible. Écrivez-nous à management@ilocap.com." }, { status: 503 });
  }

  return Response.json({ success: true });
}
