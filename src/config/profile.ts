// Public portfolio data is embedded in the static build. Never put secrets here.
export const profile = {
  name: process.env.NEXT_PUBLIC_NAME || "Developer",
  initials: process.env.NEXT_PUBLIC_INITIALS || "DEV",
  role: process.env.NEXT_PUBLIC_ROLE || "Full-Stack Developer",
  location: process.env.NEXT_PUBLIC_LOCATION || "",
  email: process.env.NEXT_PUBLIC_EMAIL || "",
  phone: process.env.NEXT_PUBLIC_PHONE || "",
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "",
};

export const projectLinks = {
  media: process.env.NEXT_PUBLIC_MEDIA_REPO || "",
  mediaDemo: process.env.NEXT_PUBLIC_MEDIA_DEMO || "",
  etl: process.env.NEXT_PUBLIC_ETL_REPO || "",
  portfolio: process.env.NEXT_PUBLIC_PORTFOLIO_REPO || "",
};
