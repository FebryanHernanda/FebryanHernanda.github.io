import React, { useMemo, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SEO, ArticleShare } from "@/assets/features";
import { styleConfig } from "./ArticleDetailPage.config";
import { IoArrowBackOutline } from "react-icons/io5";
import { useLanguage } from "@/context/LanguageContext";

// Custom lightweight inline parser for bold and backtick code blocks
const parseInline = (text: string): React.ReactNode[] => {
  // Split on backticks to parse `code`
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      const codeText = part.slice(1, -1);
      return (
        <code
          key={index}
          className="font-mono text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 px-1.5 py-0.5 rounded font-medium"
        >
          {codeText}
        </code>
      );
    }

    // Split on ** to parse **bold**
    const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
    if (boldParts.length > 1) {
      return (
        <span key={index}>
          {boldParts.map((bPart, bIdx) => {
            if (bPart.startsWith("**") && bPart.endsWith("**")) {
              return (
                <strong
                  key={bIdx}
                  className="font-semibold text-neutral-900 dark:text-neutral-50"
                >
                  {bPart.slice(2, -2)}
                </strong>
              );
            }
            return bPart;
          })}
        </span>
      );
    }

    return part;
  });
};

// Custom lightweight block renderer for headings, lists, blockquotes, and paragraphs (line-by-line parsing for robust formatting)
const renderArticleContent = (content: string) => {
  const lines = content.split("\n");
  const blocks: React.ReactNode[] = [];
  let currentList: React.ReactNode[] = [];
  let listKey = 0;

  const pushList = () => {
    if (currentList.length > 0) {
      blocks.push(
        <ul
          key={`list-${listKey++}`}
          className="list-disc pl-5 my-4 space-y-2 text-neutral-600 dark:text-neutral-400"
        >
          {currentList}
        </ul>
      );
      currentList = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (!trimmed) {
      pushList();
      continue;
    }

    // 1. Headings (## Heading 2)
    if (trimmed.startsWith("## ")) {
      pushList();
      const text = trimmed.replace("## ", "");
      blocks.push(
        <h2
          key={`h2-${i}`}
          className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mt-8 mb-3"
        >
          {parseInline(text)}
        </h2>
      );
    }
    // 2. Blockquotes (> text)
    else if (trimmed.startsWith("> ")) {
      pushList();
      const text = trimmed.replace(/^> +/, "").replace(/^"(.*)"$/, "$1");
      blocks.push(
        <blockquote
          key={`quote-${i}`}
          className="border-l-2 border-neutral-900 dark:border-neutral-700 pl-4 py-1.5 italic my-6 text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed bg-neutral-50/50 dark:bg-neutral-900/30 rounded-r-lg"
        >
          "{parseInline(text)}"
        </blockquote>
      );
    }
    // 3. Lists (- item or * item)
    else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const itemText = trimmed.replace(/^[-*] +/, "");
      currentList.push(
        <li key={`li-${i}`} className="leading-relaxed">
          {parseInline(itemText)}
        </li>
      );
    }
    // 4. Standard Paragraphs
    else {
      pushList();
      blocks.push(
        <p
          key={`p-${i}`}
          className="leading-relaxed text-neutral-600 dark:text-neutral-300 font-light my-3"
        >
          {parseInline(trimmed)}
        </p>
      );
    }
  }

  pushList();
  return blocks;
};

const ArticleDetailPage = () => {
  const { language } = useLanguage();
  const { slug } = useParams<{ slug: string }>();

  // Find current article from our static data
  const rawArticle = articles.find(
    (item) => item.slug === slug && item.status === "published"
  );

  // State to hold the dynamic view count
  const [viewCount, setViewCount] = useState(rawArticle?.views || 0);

  // Smart local views tracking to simulate a production auto-increment
  useEffect(() => {
    if (!rawArticle) return;

    const trackerKey = `has_viewed_article_${rawArticle.id}`;
    const countKey = `article_views_count_${rawArticle.id}`;
    const hasViewed = localStorage.getItem(trackerKey);

    // Retrieve cumulative views from localStorage or fallback to standard static database views
    const currentSaved = localStorage.getItem(countKey);
    const baseViews = currentSaved ? parseInt(currentSaved, 10) : (rawArticle.views || 0);

    if (!hasViewed) {
      const newViews = baseViews + 1;
      setViewCount(newViews);
      
      // Prevent multiple view counts inside the same local browser session
      localStorage.setItem(trackerKey, "true");
      // Cache the cumulative views count
      localStorage.setItem(countKey, newViews.toString());
    } else {
      setViewCount(baseViews);
    }
  }, [rawArticle]);

  // Dynamically resolve fields based on current language
  const article = useMemo(() => {
    if (!rawArticle) return null;
    return {
      ...rawArticle,
      title: language === "id" ? rawArticle.titleId : rawArticle.title,
      excerpt: language === "id" ? rawArticle.excerptId : rawArticle.excerpt,
      content: language === "id" ? rawArticle.contentId : rawArticle.content,
      tags: language === "id" ? rawArticle.tagsId : rawArticle.tags,
    };
  }, [rawArticle, language]);

  // Layout page static translations
  const t = {
    en: {
      notFoundTitle: "Article Not Found",
      notFoundDesc: "The article you are looking for does not exist, has been moved, or is still saved as a draft.",
      backBtn: "Back to Articles",
      backLinkText: "back to articles",
      ctaTitle: "Need a website, dashboard, or custom system?",
      ctaDesc: "Let’s discuss how we can build something clean, scalable, and user-focused.",
      ctaBtn: "Discuss Project",
    },
    id: {
      notFoundTitle: "Artikel Tidak Ditemukan",
      notFoundDesc: "Artikel yang Anda cari tidak ada, telah dipindahkan, atau masih disimpan sebagai draf.",
      backBtn: "Kembali ke Artikel",
      backLinkText: "kembali ke semua artikel",
      ctaTitle: "Butuh website, dashboard, atau sistem kustom?",
      ctaDesc: "Mari diskusikan bagaimana kita bisa membangun produk digital yang bersih, berskala, dan berfokus pada pengguna.",
      ctaBtn: "Diskusikan Proyek",
    },
  }[language];

  // If article not found or is in draft mode, display a premium minimal 404 state
  if (!article) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] p-5 text-center">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          {t.notFoundTitle}
        </h1>
        <p className="text-sm text-neutral-500 max-w-sm mb-6 leading-relaxed">
          {t.notFoundDesc}
        </p>
        <Button asChild variant="secondary">
          <Link to="/articles">{t.backBtn}</Link>
        </Button>
      </div>
    );
  }

  // Format date elegantly
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    language === "id" ? "id-ID" : "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <>
      <SEO
        title={`${article.title} — Febryan Hernanda`}
        description={article.excerpt}
        path={`/articles/${article.slug}`}
        image={article.ogImage}
        type="article"
        publishedAt={article.publishedAt}
        updatedAt={article.updatedAt}
        tags={article.tags}
      />
      <div className={styleConfig.wrapper}>
        <article className={styleConfig.articleWrapper}>
          {/* Back button link */}
          <Link to="/articles" className={styleConfig.backLink}>
            <IoArrowBackOutline className="w-4 h-4" />
            <span className="font-mono text-[10px] tracking-wider uppercase font-semibold">{t.backLinkText}</span>
          </Link>

          {/* Article Header Metadata */}
          <div className="flex flex-col gap-3">
            <div className={styleConfig.metaWrapper}>
              <span>{formattedDate}</span>
              <span className="text-neutral-300 dark:text-neutral-700">•</span>
              <span>{article.readingTime.replace("min read", language === "id" ? "menit baca" : "min read")}</span>
              <span className="text-neutral-300 dark:text-neutral-700">•</span>
              <span>
                {viewCount.toLocaleString(language === "id" ? "id-ID" : "en-US")}{" "}
                {language === "id" ? "kali dilihat" : "views"}
              </span>
            </div>

            <h1 className={styleConfig.title}>{article.title}</h1>

            <div className="flex flex-wrap gap-2 mt-2">
              {article.tags.map((tag: string) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-[10px] font-mono tracking-wider font-medium bg-transparent text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Excerpt / Lead Paragraph */}
          <p className={styleConfig.excerpt}>{article.excerpt}</p>

          {/* Featured Cover Image */}
          <div className={styleConfig.coverWrapper}>
            <img
              src={article.coverImage}
              alt={article.title}
              className={styleConfig.coverImage}
            />
          </div>

          {/* Article Prose Content */}
          <div className={styleConfig.prose}>
            {renderArticleContent(article.content)}
          </div>

          {/* Article Share Component */}
          <ArticleShare
            title={article.title}
            excerpt={article.excerpt}
            slug={article.slug}
          />

          {/* Soft Conversion CTA Card */}
          <div className={styleConfig.ctaCard}>
            <div className={styleConfig.ctaTextWrapper}>
              <h4 className={styleConfig.ctaTitle}>
                {t.ctaTitle}
              </h4>
              <p className={styleConfig.ctaDesc}>
                {t.ctaDesc}
              </p>
            </div>
            <Button asChild variant="default" className={styleConfig.ctaButton}>
              <Link to="/#Contact">{t.ctaBtn}</Link>
            </Button>
          </div>
        </article>
      </div>
    </>
  );
};

export default ArticleDetailPage;
