import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "L’IA ne remplace pas une solution bien réfléchie | ILOCAP",
  description: "L’intelligence artificielle fait avancer les projets plus vite, mais ne garantit ni les bons choix ni une solution digitale durable.",
  alternates: { canonical: "/insights/ia-et-expertise" },
};

export default function IAEtExpertisePage() {
  return (
    <>
      <Header />
      <main className="bg-white pt-32 text-[#111A2E] md:pt-40">
        <article>
          <header className="border-b border-[#111A2E]/10 pb-16 md:pb-24">
            <div className="section-shell px-gutter">
              <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.24em] text-[#18845B]">Point de vue · Intelligence artificielle</p>
              <h1 className="mt-6 max-w-5xl font-sora text-4xl leading-[1.04] tracking-[-0.045em] md:text-6xl lg:text-7xl">
                L’IA peut faire avancer un projet plus vite. Elle ne remplace pas une solution bien réfléchie.
              </h1>
              <p className="mt-7 max-w-3xl font-manrope text-lg leading-relaxed text-[#334158]/75 md:text-xl">
                Produire plus vite ne veut pas forcément dire mieux comprendre le besoin. Cela ne garantit pas non plus de faire les bons choix ou d’obtenir un résultat durable.
              </p>
            </div>
          </header>

          <div className="section-shell px-gutter grid gap-12 py-16 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20 lg:py-24">
            <aside className="lg:sticky lg:top-36 lg:self-start">
              <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#18845B]">À retenir</p>
              <p className="mt-4 font-sora text-2xl leading-snug text-[#111A2E]">L’IA fait baisser le coût de certaines tâches. La valeur d’un projet dépend toujours de la qualité de la solution.</p>
            </aside>

            <div className="max-w-3xl space-y-12 font-manrope text-base leading-[1.85] text-[#334158] md:text-lg">
              <section>
                <h2 className="font-sora text-3xl leading-tight text-[#111A2E]">Oui, l’IA change profondément la production digitale</h2>
                <p className="mt-5">Elle peut aider à écrire un cahier des charges, créer une première interface, produire du code, préparer des contenus, traiter des images ou automatiser des tâches répétitives. Certaines tâches se font alors plus vite et, dans plusieurs cas, coûtent moins cher.</p>
                <p className="mt-5">C’est un changement positif. Une équipe compétente doit se servir de ces outils pour travailler plus efficacement. Elle pourra alors passer plus de temps sur les décisions qui comptent vraiment.</p>
              </section>

              <section>
                <h2 className="font-sora text-3xl leading-tight text-[#111A2E]">Mais obtenir un résultat n’est pas encore disposer d’une solution</h2>
                <p className="mt-5">On peut créer une démonstration convaincante en quelques heures. Pourtant, une solution utile doit répondre à de vrais utilisateurs. Elle doit respecter vos règles métier. Elle doit aussi s’intégrer à vos outils, protéger les données, supporter la montée en charge et rester facile à maintenir.</p>
                <p className="mt-5">La vraie question n’est donc pas seulement : « Peut-on le construire ? » Elle devient : « Est-ce le bon outil, pour le bon usage, au bon coût et sur le long terme ? »</p>
              </section>

              <section className="rounded-[20px] bg-[#EBFFF5] p-7 md:p-10">
                <h2 className="font-sora text-3xl leading-tight text-[#111A2E]">Ce que l’accompagnement humain apporte</h2>
                <ul className="mt-6 space-y-4">
                  <li><strong className="text-[#111A2E]">Le cadrage :</strong> faire la différence entre le besoin réel et la première idée exprimée.</li>
                  <li><strong className="text-[#111A2E]">Les choix :</strong> décider ce qu’il faut développer, automatiser, simplifier ou laisser de côté.</li>
                  <li><strong className="text-[#111A2E]">La cohérence :</strong> lier l’expérience utilisateur, les processus, les données et les objectifs économiques.</li>
                  <li><strong className="text-[#111A2E]">La responsabilité :</strong> tester, sécuriser, documenter et prendre en charge les choix faits.</li>
                  <li><strong className="text-[#111A2E]">L’adoption :</strong> aider les personnes qui vont vraiment utiliser la solution.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-sora text-3xl leading-tight text-[#111A2E]">Quand peut-on progresser seul avec l’IA ?</h2>
                <p className="mt-5">Pour explorer une idée, créer un prototype, préparer des contenus ou automatiser une tâche personnelle simple, l’IA peut suffire. Elle permet de faire des essais rapides avant d’investir plus.</p>
                <p className="mt-5">L’intervention d’une équipe devient plus importante quand la solution concerne plusieurs utilisateurs, des données sensibles, des paiements, des systèmes existants ou des opérations critiques. Si le résultat attendu doit être fiable et durer dans le temps, le cadrage et la gouvernance prennent encore plus d’importance.</p>
              </section>

              <section>
                <h2 className="font-sora text-3xl leading-tight text-[#111A2E]">Notre engagement : utiliser l’IA sans vous vendre une illusion</h2>
                <p className="mt-5">Chez ILOCAP, nous utilisons l’IA quand elle permet de gagner du temps, de réduire un coût ou d’améliorer la qualité. Mais nous ne la prenons pas pour une stratégie, une expertise métier ou une garantie de résultat.</p>
                <p className="mt-5">Notre valeur ne dépend pas du temps passé ou de la quantité de code écrit. Elle dépend de la capacité de la solution à simplifier vos processus, à réduire vos tâches, à suivre le développement de votre activité et à être vraiment utilisée.</p>
              </section>

              <div className="border-t border-[#111A2E]/10 pt-10">
                <p className="font-sora text-2xl leading-snug text-[#111A2E]">Vous avez une idée et voulez savoir ce qu’il est possible de faire avec ou sans intelligence artificielle ?</p>
                <Link href="/contact?objet=devis" className="button-elegant mt-6 inline-flex items-center justify-center bg-[#111A2E] px-8 font-manrope text-[10px] font-extrabold uppercase text-white hover:bg-[#18845B]">Échangeons sur votre projet</Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
