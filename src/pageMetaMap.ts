import { articles } from "./data/articles";
import { getAbsoluteUrl } from "./config/site";

export interface PageMetaData {
  url: string;
  bundleEntryPoint: string;
  title: string;
  description: string;
  canonicalUrl: string;
  ogType: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  isArticle?: boolean;
  publishedAt?: string;
  updatedAt?: string;
  tags?: string[];
}

const DEFAULT_ENTRY = "/src/main.tsx";

const DEFAULT_OG_IMAGE = getAbsoluteUrl("/img/og/default.png");

export const pages: PageMetaData[] = [
  // 1. Home Page
  {
    url: "index.html",
    bundleEntryPoint: DEFAULT_ENTRY,
    title: "Febryan Hernanda — Software Engineer | Web & System Development Indonesia",
    description: "Software Engineer based in Jakarta, Indonesia. Building modern websites, scalable backend systems, and end-to-end digital platforms with React, Go, TypeScript, and PostgreSQL.",
    canonicalUrl: getAbsoluteUrl("/"),
    ogType: "website",
    ogTitle: "Febryan Hernanda — Software Engineer",
    ogDescription: "Building modern websites, scalable backend systems, and end-to-end digital platforms. React, Go, TypeScript, PostgreSQL.",
    ogImage: DEFAULT_OG_IMAGE,
    ogUrl: getAbsoluteUrl("/"),
    twitterCard: "summary_large_image",
    twitterTitle: "Febryan Hernanda — Software Engineer",
    twitterDescription: "Building modern websites, scalable backend systems, and end-to-end digital platforms. React, Go, TypeScript, PostgreSQL.",
    twitterImage: DEFAULT_OG_IMAGE,
  },
  // 2. Work Experience Page
  {
    url: "work-experience/index.html",
    bundleEntryPoint: DEFAULT_ENTRY,
    title: "Work Experience — Febryan Hernanda | Software Engineer Portfolio",
    description: "Professional experience of Febryan Hernanda — Software Engineer building enterprise web platforms, backend services, dashboards, and scalable system architecture.",
    canonicalUrl: getAbsoluteUrl("/work-experience"),
    ogType: "website",
    ogTitle: "Work Experience — Febryan Hernanda",
    ogDescription: "Professional experience building enterprise web platforms, backend services, dashboards, and scalable systems.",
    ogImage: DEFAULT_OG_IMAGE,
    ogUrl: getAbsoluteUrl("/work-experience"),
    twitterCard: "summary_large_image",
    twitterTitle: "Work Experience — Febryan Hernanda",
    twitterDescription: "Professional experience building enterprise web platforms, backend services, dashboards, and scalable systems.",
    twitterImage: DEFAULT_OG_IMAGE,
  },
  // 3. Articles List Page
  {
    url: "articles/index.html",
    bundleEntryPoint: DEFAULT_ENTRY,
    title: "Articles & Insights — Febryan Hernanda | Software Engineer",
    description: "Deep-dives, case studies, and engineering insights on frontend architecture, scalable backend systems, UI/UX restraint, and modern digitalization strategies.",
    canonicalUrl: getAbsoluteUrl("/articles"),
    ogType: "website",
    ogTitle: "Articles & Insights — Febryan Hernanda",
    ogDescription: "Deep-dives, case studies, and engineering insights on frontend architecture, UI/UX, and scalability.",
    ogImage: DEFAULT_OG_IMAGE,
    ogUrl: getAbsoluteUrl("/articles"),
    twitterCard: "summary_large_image",
    twitterTitle: "Articles & Insights — Febryan Hernanda",
    twitterDescription: "Deep-dives, case studies, and engineering insights on frontend architecture, UI/UX, and scalability.",
    twitterImage: DEFAULT_OG_IMAGE,
  },
  // 4. Individual Published Article routes
  ...articles
    .filter((article) => article.status === "published")
    .map((article) => {
      const articleUrl = getAbsoluteUrl(`/articles/${article.slug}`);
      const ogImageMapped = getAbsoluteUrl(article.ogImage || "/img/og/default.png");

      return {
        url: `articles/${article.slug}/index.html`,
        bundleEntryPoint: DEFAULT_ENTRY,
        title: `${article.title} — Febryan Hernanda`,
        description: article.excerpt,
        canonicalUrl: articleUrl,
        ogType: "article",
        ogTitle: article.title,
        ogDescription: article.excerpt,
        ogImage: ogImageMapped,
        ogUrl: articleUrl,
        twitterCard: "summary_large_image",
        twitterTitle: article.title,
        twitterDescription: article.excerpt,
        twitterImage: ogImageMapped,
        isArticle: true,
        publishedAt: article.publishedAt,
        updatedAt: article.updatedAt || article.publishedAt,
        tags: article.tags,
      };
    }),
];
