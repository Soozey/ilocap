export type AnalyticsValue = string | number | boolean | undefined;

export type AnalyticsParameters = Record<string, AnalyticsValue>;

type GtagWindow = Window & {
  gtag?: (command: "event", eventName: string, parameters?: AnalyticsParameters) => void;
};

type Attribution = {
  lead_source: string;
  lead_medium: string;
  lead_campaign: string;
};

const ATTRIBUTION_KEY = "ilocap-attribution";

function inferAttribution(): Attribution {
  const params = new URLSearchParams(window.location.search);
  const campaignSource = params.get("utm_source")?.toLowerCase();
  const campaignMedium = params.get("utm_medium")?.toLowerCase();
  const campaignName = params.get("utm_campaign")?.toLowerCase();

  if (campaignSource) {
    return {
      lead_source: campaignSource,
      lead_medium: campaignMedium || "campaign",
      lead_campaign: campaignName || "(not set)",
    };
  }

  if (!document.referrer) {
    return { lead_source: "direct", lead_medium: "(none)", lead_campaign: "(not set)" };
  }

  try {
    const hostname = new URL(document.referrer).hostname.toLowerCase();

    if (hostname.includes("google.")) {
      return { lead_source: "google", lead_medium: "organic", lead_campaign: "(not set)" };
    }
    if (hostname.includes("linkedin.")) {
      return { lead_source: "linkedin", lead_medium: "referral", lead_campaign: "(not set)" };
    }
    if (hostname.includes("facebook.") || hostname.includes("instagram.")) {
      return { lead_source: "facebook", lead_medium: "referral", lead_campaign: "(not set)" };
    }

    return { lead_source: hostname, lead_medium: "referral", lead_campaign: "(not set)" };
  } catch {
    return { lead_source: "direct", lead_medium: "(none)", lead_campaign: "(not set)" };
  }
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") {
    return { lead_source: "direct", lead_medium: "(none)", lead_campaign: "(not set)" };
  }

  const currentParams = new URLSearchParams(window.location.search);
  const hasCampaign = currentParams.has("utm_source");

  if (!hasCampaign) {
    const saved = window.sessionStorage.getItem(ATTRIBUTION_KEY);
    if (saved) {
      try {
        return JSON.parse(saved) as Attribution;
      } catch {
        window.sessionStorage.removeItem(ATTRIBUTION_KEY);
      }
    }
  }

  const attribution = inferAttribution();
  window.sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution));
  return attribution;
}

export function trackEvent(eventName: string, parameters: AnalyticsParameters = {}) {
  if (typeof window === "undefined") return;

  const analyticsWindow = window as GtagWindow;
  analyticsWindow.gtag?.("event", eventName, {
    ...getAttribution(),
    page_path: `${window.location.pathname}${window.location.search}`,
    ...parameters,
  });
}
