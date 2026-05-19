export const SITE_CONFIG = {
  siteUrl: "https://febryanhernanda.github.io",
  siteName: "Febryan Hernanda",
  twitterHandle: "@yourhandle",
};

// Centralized helper to guarantee valid absolute URLs across build-time and runtime environments
export const getAbsoluteUrl = (path: string): string => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${SITE_CONFIG.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
};
