"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

function normalizedText(anchor: HTMLAnchorElement) {
  return anchor.textContent?.replace(/\s+/g, " ").trim().toLowerCase() || "";
}

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.toString();

  useEffect(() => {
    const pagePath = `${pathname}${query ? `?${query}` : ""}`;
    trackEvent("page_view", {
      page_location: window.location.href,
      page_title: document.title,
      page_path: pagePath,
    });

    const solutionMatch = pathname.match(/^\/solutions\/([^/]+)$/);
    if (solutionMatch) {
      trackEvent("solution_view", { solution: solutionMatch[1] });
    }

    if (pathname === "/contact") {
      trackEvent("lead_form_view", {
        form_name: "contact_project",
        request_type: searchParams.get("objet") || "contact",
        solution: searchParams.get("solution") || "general",
      });
    }
  }, [pathname, query, searchParams]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const anchor = target?.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.href;
      const text = normalizedText(anchor);
      const url = new URL(href, window.location.href);
      const common = { link_url: href, link_text: text.slice(0, 100) };

      if (url.hostname === "wa.me") {
        trackEvent("contact_click", { ...common, contact_method: "whatsapp" });
        return;
      }
      if (url.protocol === "mailto:") {
        trackEvent("contact_click", { ...common, contact_method: "email" });
        return;
      }
      if (url.hostname.includes("calendly.com")) {
        trackEvent("appointment_click", common);
        return;
      }
      if (url.pathname === "/contact" && url.searchParams.get("objet") === "demo") {
        trackEvent("demo_request_click", {
          ...common,
          solution: url.searchParams.get("solution") || "general",
        });
        return;
      }
      if (url.pathname === "/contact" && url.searchParams.get("objet") === "devis") {
        trackEvent(text.includes("parler") ? "talk_project_click" : "quote_request_click", common);
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
