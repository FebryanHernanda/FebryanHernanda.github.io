import React from "react";
import type { PageMetaData } from "./pageMetaMap";

const PageTemplate: React.FC<PageMetaData> = ({
  title,
  description,
  canonicalUrl,
  ogType,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterCard,
  twitterTitle,
  twitterDescription,
  twitterImage,
  isArticle,
  publishedAt,
  updatedAt,
  tags,
}) => {
  // Generate the JSON-LD structured data
  const jsonLd = isArticle
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "author": {
          "@type": "Person",
          "name": "Febryan Hernanda Mashudi",
          "url": "https://febryanhernanda.github.io",
        },
        "datePublished": publishedAt,
        "dateModified": updatedAt || publishedAt,
        "image": ogImage,
        "mainEntityOfPage": canonicalUrl,
      }
    : [
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Febryan Hernanda — Software Engineer",
          "url": "https://febryanhernanda.github.io",
          "description": "Portfolio and freelance services of Febryan Hernanda Mashudi, Software Engineer building modern web platforms, backend systems, and scalable digital products.",
          "inLanguage": "en",
        },
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Febryan Hernanda Mashudi",
          "alternateName": "Febryan Hernanda",
          "url": "https://febryanhernanda.github.io",
          "image": "https://febryanhernanda.github.io/img/ava.png",
          "jobTitle": "Software Engineer",
          "description": "Software Engineer based in Jakarta, Indonesia. Building end-to-end web platforms, backend services, and scalable system architecture.",
          "knowsAbout": [
            "React",
            "TypeScript",
            "Go",
            "Node.js",
            "Next.js",
            "PostgreSQL",
            "System Architecture",
            "API Design",
            "Frontend Engineering",
            "Backend Engineering",
            "Web Development",
            "Dashboard Development",
          ],
          "sameAs": [
            "https://www.linkedin.com/in/febryan-hernanda-mashudi/",
            "https://www.instagram.com/febryaan_hernanda/",
            "https://github.com/FebryanHernanda",
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jakarta",
            "addressCountry": "ID",
          },
        },
      ];

  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" href="/img/FHLogo-head.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* SEO Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Febryan Hernanda, Software Engineer, Fullstack Developer, Web Developer Indonesia, React Developer Indonesia, Go Developer, Backend Developer Indonesia, Freelance Web Developer Indonesia, Dashboard Developer, System Architecture, Custom Web App Developer, Website Developer Jakarta"
        />
        <meta name="author" content="Febryan Hernanda Mashudi" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href={canonicalUrl} />

        {/* Geo Tags (Local SEO) */}
        <meta name="geo.region" content="ID-JK" />
        <meta name="geo.placename" content="Jakarta" />
        <meta name="geo.position" content="-6.2088;106.8456" />
        <meta name="ICBM" content="-6.2088, 106.8456" />

        {/* Theme Color */}
        <meta name="theme-color" content="#0F0F0F" />
        <meta name="msapplication-TileColor" content="#0F0F0F" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={title} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Febryan Hernanda" />

        {/* Twitter Card */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={twitterTitle} />
        <meta name="twitter:description" content={twitterDescription} />
        <meta name="twitter:image" content={twitterImage} />
        <meta name="twitter:image:alt" content={title} />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* SPA Redirect Handler (works with 404.html) */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function (l) {
                if (l.search[1] === '/') {
                  var decoded = l.search
                    .slice(1)
                    .split('&')
                    .map(function (s) {
                      return s.replace(/~and~/g, '&');
                    })
                    .join('?');
                  window.history.replaceState(null, null, l.pathname.slice(0, -1) + decoded + l.hash);
                }
              })(window.location);
            `,
          }}
        />
      </head>
      <body>
        <div id="root"></div>

        {/* noscript section for non-JS web crawlers */}
        <noscript>
          {isArticle ? (
            <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px", fontFamily: "Inter, system-ui, sans-serif" }}>
              <h1>{title}</h1>
              <p>Published on: {publishedAt}</p>
              {tags && <p>Tags: {tags.join(", ")}</p>}
              <hr style={{ margin: "20px 0" }} />
              <p><em>{description}</em></p>
              <div style={{ whiteSpace: "pre-line", lineHeight: "1.6" }}>
                {/* Fallback to simple description if JS is off, guaranteeing crawler indexes the content summary */}
                <p>This is a React portfolio article. Please enable JavaScript in your browser to view the interactive full-fidelity page layout, graphics, reading times, views tracking, and animations.</p>
              </div>
            </div>
          ) : (
            <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px", fontFamily: "Inter, system-ui, sans-serif" }}>
              <h1>Febryan Hernanda — Software Engineer</h1>
              <p>Software Engineer based in Jakarta, Indonesia. Building modern websites, scalable backend systems, and end-to-end digital platforms with clean architecture and thoughtful system design.</p>

              <h2>Services</h2>
              <ul>
                <li>Company Profile & CMS Website Development</li>
                <li>Custom Dashboard & Web Application Development</li>
                <li>Backend API & System Architecture</li>
                <li>End-to-End Digital Platform Development</li>
              </ul>

              <h2>Tech Stack</h2>
              <p>React, TypeScript, Next.js, Go, Node.js, PostgreSQL, MongoDB, Docker, Tailwind CSS, Vite</p>

              <h2>Experience</h2>
              <ul>
                <li>Frontend Engineer — PT Jasa Marga (Persero) Tbk (2026–Present)</li>
                <li>Fullstack Engineer — PT Bandung Semesta Teknologi (2025–2026)</li>
                <li>Fullstack Engineer — Koda Tech Academy (2025)</li>
              </ul>

              <h2>Contact</h2>
              <p>Available for freelance projects & collaboration.</p>
              <p>
                <a href="https://www.linkedin.com/in/febryan-hernanda-mashudi/">LinkedIn</a> |
                <a href="https://github.com/FebryanHernanda">GitHub</a>
              </p>
            </div>
          )}
        </noscript>
      </body>
    </html>
  );
};

export default PageTemplate;
