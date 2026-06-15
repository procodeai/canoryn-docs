export const branding = {
  appName: "Canoryn",
  companyName: "Procode AI Labs",
  urlScheme: "canoryn",
  fileExtension: "cryn",
  websiteUrl: "https://canoryn.app",
  docsUrl: "https://canoryn.app/docs",
  supportEmail: "support@canoryn.app",
  githubUrl: "https://github.com/procodeai/canoryn-releases",
  releasesUrl: "https://github.com/procodeai/canoryn-releases/releases",
  twitterUrl: "https://x.com/canoryn",
  instagramUrl: "https://www.instagram.com/canoryn.app/",
  youtubeUrl: "https://www.youtube.com/@canoryn",
  currentVersion: "1.0.0-beta",
} as const;

export type BrandingVariables = keyof typeof branding;
