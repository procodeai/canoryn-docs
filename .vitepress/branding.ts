export const branding = {
  appName: "Canoryn",
  companyName: "ProCode AI",
  urlScheme: "canoryn",
  fileExtension: "cryn",
  websiteUrl: "https://canoryn.app",
  docsUrl: "https://canoryn.app/docs",
  supportEmail: "support@canoryn.app",
  githubUrl: "https://github.com/procodeai/canoryn",
  releasesUrl: "https://github.com/procodeai/canoryn-releases/releases",
  discordUrl: "https://discord.gg/procodeai",
  twitterUrl: "https://twitter.com/procodeai",
  currentVersion: "1.0.0-beta",
} as const;

export type BrandingVariables = keyof typeof branding;
