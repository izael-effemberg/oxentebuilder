import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Izael Effemberg | Produto, Tecnologia e IA",
  description:
    "Estrategista de Produto, Tecnologia e IA, creator, palestrante, colunista e fundador da Oxente Builder.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Izael Effemberg | Produto, Tecnologia e IA",
    description: siteConfig.profile.subheadline,
    url: "/",
    siteName: "Izael Effemberg",
    images: [
      {
        url: siteConfig.profile.image,
        width: 1024,
        height: 1536,
        alt: "Izael Effemberg"
      }
    ],
    locale: "pt_BR",
    type: "profile"
  },
  twitter: {
    card: "summary_large_image",
    title: "Izael Effemberg | Produto, Tecnologia e IA",
    description: siteConfig.profile.subheadline,
    images: [siteConfig.profile.image]
  },
  icons: {
    icon: siteConfig.favicon
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.profile.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.profile.image}`,
    jobTitle: "Estrategista de Produto, Tecnologia e IA",
    description: siteConfig.profile.description,
    sameAs: siteConfig.socialLinks.filter((link) => !link.href.startsWith("mailto:")).map((link) => link.href)
  };

  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
