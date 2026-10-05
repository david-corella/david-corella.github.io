import type {
  LegalData,
  NavItemProps,
  PortfolioDataProps,
  SiteDataProps,
} from "../types/configDataTypes";

/** English (`/en/`) — the secondary locale. */

export const siteData: SiteDataProps = {
  name: "davidcorella.dev",
  title: "David Corella — Full-Stack Software Engineer",
  description:
    "Portfolio of David Corella, full-stack software engineer: academic and personal projects, experience, and notes on web development, backend, networks, and data.",

  author: {
    name: "David Corella",
    email: "davidcorella537@gmail.com",
    twitter: "",
  },

  defaultImage: {
    src: "/og.jpg",
    alt: "David Corella — Full-Stack Software Engineer",
  },

  sameAs: ["https://github.com/david-corella", "https://www.linkedin.com/in/davidcorella"],
};

export const portfolioData: PortfolioDataProps = {
  profile: {
    tagline: "Profile 01",
    heading: "Full-Stack Software Engineer",
    role: "Backend",
    years: "1+",
    bio: [
      "Experience across the full application lifecycle, from interface design to server architecture.",
      "Passionate about best practices, accessibility, and continuously learning new technologies.",
      "Comfortable working with agile methodologies, collaborating closely with teams to turn ideas into high-impact digital products.",
    ],
    shortBio:
      "Software developer focused on building modern, optimized, user-centered web applications. Always ready to solve complex technical problems with clean code.",
    meta: {
      location: "Hermosillo, Sonora, MX (remote)",
      role: "Full-Stack Eng.",
      favorite: "8-Bit Chiptunes",
    },
    skills: [
      { label: "Frontend", pct: 40 },
      { label: "Backend", pct: 90 },
      { label: "Data analysis", pct: 60 },
      { label: "Databases", pct: 80 },
      { label: "Servers", pct: 50 },
      { label: "Networking", pct: 90 },
    ],
  },

  stats: {
    home: ["Projects: 7", "Years: 1+", "Coffees: ∞"],
    profile: ["Role: Backend", "Level: 1+", "Projects: 7", "Stack: Full-Stack"],
  },

  home: {
    tagline: "Player 1",
    heading: "Welcome, Player One",
    intro:
      "Level up with my projects, experiments, and notes on web development, backend, networks, and data analysis. Press Start to begin.",
  },

  contact: {
    prompt: "Want to talk about a project, a collaboration, or just share a favorite game?",
  },
};

export const navItems: readonly NavItemProps[] = [
  { label: "About", href: "/about/" },
  { label: "Projects", href: "/projects/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
] as const;

export const legalData: LegalData = {
  terms: {
    title: "Terms & Conditions",
    description: "The terms and conditions governing your use of this website.",
    lastUpdated: "2026-10-04",
    intro:
      "These terms and conditions (“Terms”) govern your access to and use of this website. Please read them carefully. This is placeholder template content — replace it with your own terms, reviewed by a qualified legal professional, before you launch.",
    sections: [
      {
        heading: "Acceptance of terms",
        body: [
          "By accessing or using this website, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, please do not use the site.",
        ],
      },
      {
        heading: "Use of the service",
        body: [
          "You may use this website for lawful purposes only. You agree not to misuse the service, interfere with its normal operation, or attempt to access it by any method other than the interface we provide.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "Unless otherwise stated, all content on this website — including text, graphics, logos, and code — is owned by us or our licensors and is protected by applicable intellectual-property laws. You may not reproduce or redistribute it without permission.",
        ],
      },
      {
        heading: "Disclaimers",
        body: [
          "This website is provided “as is” and “as available” without warranties of any kind, whether express or implied. We do not guarantee that the site will be uninterrupted, secure, or error-free.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          "To the fullest extent permitted by law, we will not be liable for any indirect, incidental, or consequential damages arising from your use of, or inability to use, this website.",
        ],
      },
      {
        heading: "Changes to these terms",
        body: [
          "We may update these Terms from time to time. Material changes are reflected by the “last updated” date above, and your continued use of the site constitutes acceptance of the revised Terms.",
        ],
      },
      {
        heading: "Contact",
        body: [
          "If you have questions about these Terms, contact us at the address published on our website.",
        ],
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    description: "How we collect, use, and protect your personal information.",
    lastUpdated: "2026-10-04",
    intro:
      "This privacy policy explains how we collect, use, and safeguard your personal information when you visit this website. This is placeholder template content — replace it with a policy that reflects your actual data practices and applicable law.",
    sections: [
      {
        heading: "Information we collect",
        body: [
          "We may collect information you provide directly (such as your name and email when you contact us) and information collected automatically (such as your IP address, browser type, and pages visited).",
        ],
      },
      {
        heading: "How we use your information",
        body: [
          "We use the information we collect to operate and improve the website, respond to your requests, and comply with legal obligations. We do not sell your personal information.",
        ],
      },
      {
        heading: "Cookies and tracking",
        body: [
          "This website may use cookies and similar technologies to remember your preferences and understand how the site is used. You can control cookies through your browser settings.",
        ],
      },
      {
        heading: "Sharing your information",
        body: [
          "We share personal information only with service providers who help us operate the site, or when required by law. Any such providers are bound to handle your data securely.",
        ],
      },
      {
        heading: "Data retention",
        body: [
          "We retain personal information only for as long as necessary to fulfil the purposes described in this policy, unless a longer retention period is required by law.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "Depending on where you live, you may have the right to access, correct, or delete your personal information, or to object to certain processing. Contact us to exercise these rights.",
        ],
      },
      {
        heading: "Security",
        body: [
          "We take reasonable technical and organizational measures to protect your information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
        ],
      },
      {
        heading: "Changes to this policy",
        body: [
          "We may update this policy from time to time. The “last updated” date above reflects the most recent revision.",
        ],
      },
    ],
  },
};
