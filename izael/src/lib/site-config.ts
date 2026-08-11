export type TrackedLink = {
  label: string;
  href: string;
  event: string;
  description?: string;
  icon?: string;
  prominence?: "primary" | "secondary" | "compact";
};

const withUtm = (url: string, campaign: string) => {
  if (url.startsWith("mailto:")) return url;
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}utm_source=instagram&utm_medium=bio&utm_campaign=${campaign}`;
};

const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const inferredGithubPagesBasePath =
  process.env.GITHUB_ACTIONS === "true" && repositoryName && !repositoryName.endsWith(".github.io")
    ? `/${repositoryName}`
    : "";
const basePath = configuredBasePath === "none" ? "" : configuredBasePath || inferredGithubPagesBasePath;
const assetPath = (path: string) => `${basePath}${path}`;

export const siteConfig = {
  url: "https://izael-effemberg.com",
  favicon: assetPath("/favicon.svg"),
  profile: {
    name: "Izael Effemberg",
    positioning: "Produto · Tecnologia · Inteligência Artificial · Liderança",
    headline: "Produto, Tecnologia e IA para construir o que vem depois.",
    subheadline:
      "Estratégia, inteligência artificial, liderança e construção de produtos para empresas e profissionais que querem operar na nova economia.",
    credentials: "15+ anos em Produto & Tecnologia · Founder · Speaker · Colunista",
    description:
      "Estrategista de Produto, Tecnologia e IA, creator, palestrante, colunista e fundador da Oxente Builder.",
    image: assetPath("/images/izael-effemberg-real.png")
  },
  socialLinks: [
    { label: "Instagram", href: withUtm("https://instagram.com/izaeleffemberg", "social_instagram"), event: "click_instagram", icon: "Instagram" },
    { label: "LinkedIn", href: withUtm("https://linkedin.com/in/izaeleffemberg", "social_linkedin"), event: "click_linkedin", icon: "Linkedin" },
    { label: "YouTube", href: withUtm("https://youtube.com/@izaeleffemberg", "social_youtube"), event: "click_youtube", icon: "Youtube" },
    { label: "TikTok", href: withUtm("https://tiktok.com/@izaeleffemberg", "social_tiktok"), event: "click_tiktok", icon: "Music2" },
    { label: "E-mail", href: "mailto:izael@oxentebuilder.com", event: "click_contact", icon: "Mail" }
  ] satisfies TrackedLink[],
  primaryCta: {
    label: "Trabalhe comigo",
    description: "Consultoria, estratégia de IA, advisory e projetos especiais.",
    cta: "Conheça a Oxente Builder",
    href: withUtm("https://oxentebuilder.com", "primary_oxente"),
    event: "click_oxente"
  },
  primaryLinks: [
    { label: "Palestras e eventos", href: withUtm("https://izael-effemberg.github.io/site/creator", "links_speaking"), event: "click_speaking", icon: "Mic2", description: "Keynotes, painéis e conversas executivas.", prominence: "primary" },
    { label: "Consultoria em IA", href: withUtm("https://oxentebuilder.com", "links_consulting"), event: "click_consulting", icon: "BrainCircuit", description: "Estratégia, agentes e transformação aplicada.", prominence: "primary" },
    { label: "Oxente Builder", href: withUtm("https://oxentebuilder.com", "links_oxente"), event: "click_oxente", icon: "Rocket", description: "Projetos especiais em produto, tecnologia e IA.", prominence: "secondary" },
    { label: "Minha coluna na StartSe", href: withUtm("https://www.startse.com/autor/izael-effemberg/", "links_startse"), event: "click_article", icon: "Newspaper", description: "Ideias sobre negócios, futuro e tecnologia.", prominence: "secondary" },
    { label: "YouTube", href: withUtm("https://youtube.com/@izaeleffemberg", "links_youtube"), event: "click_youtube", icon: "Youtube", prominence: "compact" },
    { label: "LinkedIn", href: withUtm("https://linkedin.com/in/izaeleffemberg", "links_linkedin"), event: "click_linkedin", icon: "Linkedin", prominence: "compact" },
    { label: "Instagram", href: withUtm("https://instagram.com/izaeleffemberg", "links_instagram"), event: "click_instagram", icon: "Instagram", prominence: "compact" },
    { label: "Artigos e conteúdos", href: withUtm("https://www.startse.com/autor/izael-effemberg/", "links_articles"), event: "click_article", icon: "PenLine", prominence: "compact" },
    { label: "Parcerias e publicidade", href: withUtm("https://izael-effemberg.github.io/site/creator", "links_partnerships"), event: "click_media_kit", icon: "Handshake", prominence: "compact" },
    { label: "Entre em contato", href: "mailto:izael@oxentebuilder.com", event: "click_contact", icon: "Send", prominence: "compact" }
  ] satisfies TrackedLink[],
  brands: ["Stone", "StartSe", "Oxente", "Fintech", "SaaS", "AI Labs", "Creators"],
  speaking: {
    title: "Palestras, eventos e conversas que provocam transformação.",
    description:
      "Inteligência Artificial, futuro do trabalho, produto, tecnologia, liderança e novas formas de construir organizações.",
    primary: { label: "Conheça minhas palestras", href: withUtm("https://izael-effemberg.github.io/site/creator", "speaking_primary"), event: "click_speaking" },
    secondary: { label: "Fale comigo", href: "mailto:izael@oxentebuilder.com", event: "click_contact" }
  },
  partnerships: {
    title: "Parcerias & Collabs",
    description: "Conteúdo, experiências, tecnologia, lifestyle, viagens e marcas que dialogam com inovação e futuro.",
    primary: { label: "Mídia Kit", href: withUtm("https://izael-effemberg.github.io/site/creator", "media_kit"), event: "click_media_kit" },
    secondary: { label: "Propor parceria", href: "mailto:izael@oxentebuilder.com?subject=Proposta%20de%20parceria", event: "click_contact" }
  }
};
