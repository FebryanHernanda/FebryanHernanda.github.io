import { defineConfig } from "vite";
import path from "path";
import fs from "fs";
import tailwindcss from "tailwindcss";
import react from "@vitejs/plugin-react-swc";
import metaMapPlugin from "vite-plugin-react-meta-map";
import { githubPagesSpa } from "@sctg/vite-plugin-github-pages-spa";
import { articles } from "./src/data/articles";
import { SITE_CONFIG } from "./src/config/site";

function sitemapPlugin() {
  return {
    name: "generate-sitemap-and-robots",
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
      }

      // 1. Generate sitemap.xml
      const urls = [
        {
          loc: `${SITE_CONFIG.siteUrl}/`,
          changefreq: "weekly",
          priority: "1.0",
          lastmod: new Date().toISOString().split("T")[0],
        },
        {
          loc: `${SITE_CONFIG.siteUrl}/work-experience`,
          changefreq: "monthly",
          priority: "0.8",
          lastmod: new Date().toISOString().split("T")[0],
        },
        {
          loc: `${SITE_CONFIG.siteUrl}/articles`,
          changefreq: "weekly",
          priority: "0.8",
          lastmod: new Date().toISOString().split("T")[0],
        },
        ...articles
          .filter((a) => a.status === "published")
          .map((a) => ({
            loc: `${SITE_CONFIG.siteUrl}/articles/${a.slug}`,
            changefreq: "monthly",
            priority: "0.7",
            lastmod: a.updatedAt || a.publishedAt,
          })),
      ];

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

      fs.writeFileSync(path.join(distDir, "sitemap.xml"), xml, "utf-8");
      // Also write to public/sitemap.xml to keep it in sync in git repo
      const publicDir = path.resolve(__dirname, "public");
      fs.writeFileSync(path.join(publicDir, "sitemap.xml"), xml, "utf-8");

      // 2. Generate robots.txt
      const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_CONFIG.siteUrl}/sitemap.xml
`;
      fs.writeFileSync(path.join(distDir, "robots.txt"), robots, "utf-8");
      fs.writeFileSync(path.join(publicDir, "robots.txt"), robots, "utf-8");

      console.log("✓ sitemap.xml & robots.txt generated successfully in dist/ and public/!");
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    metaMapPlugin({
      pageMetaMapFilePath: "./src/pageMetaMap.ts",
      pageTemplateFilePath: "./src/PageTemplate.tsx",
    }),
    githubPagesSpa({
      verbose: true,
    }),
    sitemapPlugin(),
  ],
  base: "/",
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
