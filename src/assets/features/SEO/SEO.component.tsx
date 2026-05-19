import { Helmet } from "react-helmet-async";
import { SEOProps } from "./SEO.types";

const SITE_URL = "https://febryanhernanda.github.io";
const DEFAULT_IMAGE = `${SITE_URL}/img/og-preview.png`;

export const SEO = ({
  title,
  description,
  path = "",
  image,
  type = "website",
  publishedAt,
  updatedAt,
  tags,
}: SEOProps) => {
  const canonicalUrl = `${SITE_URL}${path}`;
  const ogImageUrl = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : DEFAULT_IMAGE;

  // JSON-LD Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebSite",
    ...(type === "article"
      ? {
          headline: title,
          description: description,
          author: {
            "@type": "Person",
            "name": "Febryan Hernanda Mashudi",
            "url": SITE_URL,
          },
          datePublished: publishedAt,
          dateModified: updatedAt || publishedAt,
          image: ogImageUrl,
          mainEntityOfPage: canonicalUrl,
        }
      : {
          name: "Febryan Hernanda",
          url: SITE_URL,
          description: description,
          author: {
            "@type": "Person",
            "name": "Febryan Hernanda Mashudi",
            "url": SITE_URL,
          },
        }),
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Febryan Hernanda" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {type === "article" && publishedAt && (
        <meta property="article:published_time" content={publishedAt} />
      )}
      {type === "article" && updatedAt && (
        <meta property="article:modified_time" content={updatedAt} />
      )}
      {type === "article" &&
        tags &&
        tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
