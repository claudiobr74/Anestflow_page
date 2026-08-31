export const siteConfig = {
  name: "AnestFlow",
  description:
    "Fluxo anestésico digital para avaliação pré-anestésica, registro intraoperatório, ferramentas clínicas e documentação.",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://anestflow-page.vercel.app",
  platformUrl: process.env.NEXT_PUBLIC_PLATFORM_URL || "/contato",
  contactUrl: process.env.NEXT_PUBLIC_CONTACT_URL || "/contato",
};
