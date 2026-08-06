const siteConfig = {
  profile: {
    name: "Marcus VB",
    initials: "M",
    image: "assets/marcus-vb-profile.jpeg",
    eyebrow: "ATOR • COMUNICADOR • CREATOR",
    description: "Histórias reais, cultura pop e experiências que conectam pessoas e marcas.",
    support: "Viagens • Lifestyle • Entretenimento",
  },
  contact: {
    email: "contatomarcusvb@gmail.com",
    whatsapp: "5511930542013",
    partnershipMessage:
      "Olá, Marcus! Conheci seu trabalho pelo seu site e gostaria de conversar sobre uma possível parceria.",
    campaignMessage:
      "Olá, Marcus! Gostaria de conversar sobre uma campanha com você.",
  },
  mediaKit: {
    label: "Mídia kit",
    url: "https://izael-effemberg.github.io/site-marcus-vib/",
  },
  credibility: [],
  links: [
    {
      id: "instagram",
      type: "instagram",
      label: "Instagram",
      username: "@marcus.vib",
      url: "https://www.instagram.com/marcus.vib/",
      category: "social",
      featured: true,
      color: "#e9498f",
    },
    {
      id: "tiktok",
      type: "tiktok",
      label: "TikTok",
      username: "@marcus.vib",
      url: "https://www.tiktok.com/@marcus.vib",
      category: "social",
      color: "#30f2ef",
    },
    {
      id: "threads",
      type: "threads",
      label: "Threads",
      username: "@marcus.vib",
      url: "https://www.threads.net/@marcus.vib",
      category: "social",
      color: "#ffffff",
    },
    {
      id: "kwai",
      type: "kwai",
      label: "Kwai",
      username: "@marcus.vib",
      url: "https://www.kwai.com/@marcus.vib",
      category: "social",
      color: "#ff8b22",
    },
    {
      id: "x",
      type: "x",
      label: "X",
      username: "@marcusvib",
      url: "https://x.com/marcusvib",
      category: "social",
      color: "#f7f4ec",
    },
  ],
};

const iconMap = {
  instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17" cy="7" r="1.2" fill="currentColor"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4v10.2a4.2 4.2 0 1 1-4.2-4.2c.5 0 .9.1 1.3.2v3a1.6 1.6 0 1 0 1.1 1.5V4h2.8c.5 2.5 2 4 4.3 4.4v2.9c-2.1-.1-3.8-.9-5.3-2.4Z" fill="currentColor"/></svg>`,
  threads: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.1 3.5c4.7 0 7.4 2.9 7.4 8.5 0 5.1-2.9 8.5-7.7 8.5-4.1 0-7.3-2.8-7.3-7.5 0-4.3 2.8-7.2 6.7-7.2 3.5 0 5.8 2 5.8 5.2v.5l2 .9-.8 2-1.6-.7c-.7 2.1-2.4 3.2-4.7 3.2-2.2 0-3.8-1.2-3.8-3.1 0-1.9 1.6-3.1 4-3.1.8 0 1.6.1 2.4.3-.2-1.7-1.4-2.7-3.3-2.7-2.7 0-4.4 1.9-4.4 4.8 0 3.3 2.1 5.3 5.1 5.3 3.5 0 5.4-2.5 5.4-6.4 0-4.2-1.8-6.4-5.3-6.4-1.8 0-3.2.5-4.4 1.5L6.2 5c1.6-1 3.5-1.5 5.9-1.5Zm.2 9.3c-1.1 0-1.7.4-1.7 1.1s.6 1.1 1.6 1.1c1.2 0 2-.6 2.3-1.7-.7-.3-1.4-.5-2.2-.5Z" fill="currentColor"/></svg>`,
  kwai: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6.5A2.5 2.5 0 1 1 10.5 9 2.5 2.5 0 0 1 8 6.5Zm6.2 0A2.3 2.3 0 1 1 16.5 8.8a2.3 2.3 0 0 1-2.3-2.3ZM5 12.2A3.2 3.2 0 0 1 8.2 9h5.1a3.2 3.2 0 0 1 3.2 3.2v4.6a3.2 3.2 0 0 1-3.2 3.2H8.2A3.2 3.2 0 0 1 5 16.8Zm12.3 1.1 2.7-1.7v6.8l-2.7-1.7Z" fill="currentColor"/></svg>`,
  x: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 10.3 21.8 2h-2.1l-6.6 7-5.2-7H2l8.2 11-8 9h2.1l6.8-7.6 5.7 7.6H22Zm-2 2.1-.9-1.2L6.2 3.8h1.1l11.4 16.4h-1.1Z" fill="currentColor"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5a8.3 8.3 0 0 0-7.2 12.5L4 20.5l4.6-1.1A8.3 8.3 0 1 0 12 3.5Zm0 2a6.3 6.3 0 0 1 0 12.6c-1.1 0-2.2-.3-3.1-.8l-.4-.2-1.9.5.5-1.9-.2-.4A6.3 6.3 0 0 1 12 5.5Zm-2.3 3.1c-.2 0-.5.1-.7.4-.2.3-.7.8-.7 2 0 1.1.8 2.3.9 2.5.1.2 1.6 2.6 4 3.5 2 .8 2.4.5 2.8.5.4 0 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1l-1.9-.9c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.6.1-.3-.1-1.1-.4-2-1.2-.7-.7-1.2-1.5-1.4-1.8-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.3-.4.1-.2.1-.3 0-.5l-.8-1.8c-.2-.3-.4-.3-.7-.3Z" fill="currentColor"/></svg>`,
  email: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.8 6h14.4c1 0 1.8.8 1.8 1.8v8.4c0 1-.8 1.8-1.8 1.8H4.8c-1 0-1.8-.8-1.8-1.8V7.8C3 6.8 3.8 6 4.8 6Zm.6 2 6.6 4.6L18.6 8Zm13.6 1.6-6.4 4.5a1 1 0 0 1-1.2 0L5 9.6V16h14Z" fill="currentColor"/></svg>`,
  mediaKit: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-5.8l1.8 2H9l1.8-2H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm1 2v10h12V6Zm2 2h6v2H8Zm0 4h8v2H8Z" fill="currentColor"/></svg>`,
  externalLink: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5h-2V8.4l-7.3 7.3-1.4-1.4L15.6 7H14Zm-8 2h5v2H8v8h8v-3h2v5H6Z" fill="currentColor"/></svg>`,
};

const bySelector = (selector) => document.querySelector(selector);
const encoded = (value) => encodeURIComponent(value);
const whatsappUrl = (message) => `https://wa.me/${siteConfig.contact.whatsapp}?text=${encoded(message)}`;

function setIcon(container, type) {
  if (container) {
    container.innerHTML = iconMap[type] || iconMap.externalLink;
  }
}

function hydrateProfile() {
  const profile = siteConfig.profile;
  bySelector("[data-profile-eyebrow]").textContent = profile.eyebrow;
  bySelector("[data-profile-name]").textContent = profile.name;
  bySelector("[data-profile-description]").textContent = profile.description;
  bySelector("[data-profile-support]").textContent = profile.support;

  const avatar = bySelector("[data-profile-avatar]");
  if (profile.image) {
    avatar.innerHTML = `<img src="${profile.image}" alt="">`;
  } else {
    avatar.textContent = profile.initials;
  }

  const partnershipLink = whatsappUrl(siteConfig.contact.partnershipMessage);
  const primaryCta = bySelector("[data-hero-whatsapp]");
  primaryCta.href = partnershipLink;
  primaryCta.textContent = "Propor uma parceria";

  const mediaCta = bySelector("[data-hero-media]");
  mediaCta.href = siteConfig.mediaKit.url;
  mediaCta.textContent = "Ver mídia kit";
}

function hydrateCredibility() {
  const section = bySelector("[data-credibility-section]");
  section.innerHTML = siteConfig.credibility
    .map((item) => `<article class="credibility__item"><strong>${item.value}</strong><span>${item.label}</span></article>`)
    .join("");
}

function hydrateMediaKit() {
  document.querySelectorAll('[data-icon="mediaKit"]').forEach((node) => setIcon(node, "mediaKit"));
  document.querySelectorAll('[data-icon="externalLink"]').forEach((node) => setIcon(node, "externalLink"));

  bySelector("[data-media-link]").href = siteConfig.mediaKit.url;
  bySelector("[data-campaign-link]").href = whatsappUrl(siteConfig.contact.campaignMessage);
}

function hydrateSocialLinks() {
  const socialLinks = siteConfig.links.filter((link) => link.category === "social");
  bySelector("[data-social-links]").innerHTML = socialLinks
    .map(
      (link) => `
        <a class="social-card" href="${link.url}" target="_blank" rel="noopener" style="--platform-color: ${link.color}">
          <span class="social-card__icon">${iconMap[link.type] || iconMap.externalLink}</span>
          <span>
            <strong>${link.label}</strong>
            <small>${link.username}</small>
          </span>
          <span class="social-card__arrow" aria-hidden="true">${iconMap.externalLink}</span>
        </a>
      `,
    )
    .join("");
}

function hydrateContact() {
  const whatsapp = bySelector("[data-contact-whatsapp]");
  whatsapp.href = whatsappUrl(siteConfig.contact.partnershipMessage);
  whatsapp.innerHTML = `${iconMap.whatsapp} WhatsApp`;

  const email = bySelector("[data-contact-email]");
  email.href = `mailto:${siteConfig.contact.email}`;
  email.innerHTML = `${iconMap.email} Email`;

  const copyButton = bySelector("[data-copy-email]");
  const feedback = bySelector("[data-copy-feedback]");
  copyButton.innerHTML = `${iconMap.email} Copiar e-mail`;
  copyButton.addEventListener("click", async () => {
    const fallbackCopy = () => {
      const fallback = document.createElement("textarea");
      fallback.value = siteConfig.contact.email;
      fallback.setAttribute("readonly", "");
      fallback.style.position = "fixed";
      fallback.style.opacity = "0";
      document.body.appendChild(fallback);
      fallback.select();
      document.execCommand("copy");
      fallback.remove();
    };

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(siteConfig.contact.email);
      } else {
        fallbackCopy();
      }
    } catch {
      fallbackCopy();
    }

    feedback.textContent = "E-mail copiado";
    window.setTimeout(() => {
      feedback.textContent = "";
    }, 2200);
  });
}

function hydrateFooter() {
  bySelector("[data-footer-year]").textContent = `© ${new Date().getFullYear()} Marcus VB`;
  const instagram = siteConfig.links.find((link) => link.id === "instagram");
  bySelector("[data-footer-instagram]").href = instagram?.url || "#";
}

hydrateProfile();
hydrateCredibility();
hydrateMediaKit();
hydrateSocialLinks();
hydrateContact();
hydrateFooter();
