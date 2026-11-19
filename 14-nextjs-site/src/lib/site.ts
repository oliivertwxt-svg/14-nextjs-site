const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const deploymentHost = process.env.VERCEL_URL;
const deploymentUrl = productionHost ?? deploymentHost;
const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (deploymentUrl ? `https://${deploymentUrl}` : "https://northstar.studio");

export const siteUrl = new URL(configuredUrl).origin;

export function absoluteUrl(path: string): string {
  return new URL(path, siteUrl).toString();
}
