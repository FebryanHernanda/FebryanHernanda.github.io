import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { articles } from "@/data/articles";
import { ArticleCard } from "@/assets/molecules";
import { Badge } from "@/components/ui/badge";
import { styleConfig } from "./ArticlesSection.config";
import { useLanguage } from "@/context/LanguageContext";

const ITEMS_PER_PAGE = 6;

const ArticlesSection = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const localizedArticles = useMemo(() => {
    return articles.map((article) => {
      const savedViews = localStorage.getItem(
        `article_views_count_${article.id}`,
      );
      return {
        ...article,
        title: language === "id" ? article.titleId : article.title,
        excerpt: language === "id" ? article.excerptId : article.excerpt,
        content: language === "id" ? article.contentId : article.content,
        tags: language === "id" ? article.tagsId : article.tags,
        views: savedViews ? parseInt(savedViews, 10) : article.views || 0,
      };
    });
  }, [language]);

  const publishedArticles = useMemo(() => {
    return localizedArticles
      .filter((article) => article.status === "published")
      .sort((a, b) => {
        const dateDiff =
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        if (dateDiff !== 0) return dateDiff;
        return Number(b.id) - Number(a.id);
      });
  }, [localizedArticles]);

  const featuredArticle = useMemo(() => {
    if (publishedArticles.length === 0) return null;
    return [...publishedArticles].sort(
      (a, b) => (b.views || 0) - (a.views || 0),
    )[0];
  }, [publishedArticles]);

  const categories = useMemo(() => {
    const tags = publishedArticles.flatMap((a) => a.tags);
    return ["All", ...Array.from(new Set(tags))];
  }, [publishedArticles]);

  useEffect(() => {
    setActiveCategory("All");
    setCurrentPage(1);
  }, [language]);

  const filteredArticles = useMemo(() => {
    let list = publishedArticles;
    if (activeCategory === "All") {
      if (featuredArticle) {
        list = list.filter((a) => a.id !== featuredArticle.id);
      }
    } else {
      list = list.filter((a) => a.tags.includes(activeCategory));
    }
    return list;
  }, [publishedArticles, activeCategory, featuredArticle]);

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);

  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredArticles.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredArticles, currentPage]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const featured = document.querySelector(".featured-animation-item");
      if (featured) {
        gsap.fromTo(
          featured,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        );
      }
    });

    return () => ctx.revert();
  }, [activeCategory]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".grid-animation-item");
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: "power2.out",
          },
        );
      }
    });

    return () => ctx.revert();
  }, [activeCategory, currentPage]);

  if (publishedArticles.length === 0) {
    return (
      <section className={styleConfig.wrapper}>
        <div className={styleConfig.emptyState}>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
            {language === "id"
              ? "Belum Ada Artikel Yang Diterbitkan"
              : "No Articles Published Yet"}
          </h3>
          <p className="text-sm text-neutral-500 mt-2 max-w-sm">
            {language === "id"
              ? "Kami sedang menulis artikel rekayasa perangkat lunak dan desain terbaru. Silakan kembali lagi nanti."
              : "We are currently crafting fresh engineering and design articles. Please check back soon."}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full flex flex-col gap-12 py-8">
      {/* A. Dynamic Top/Featured Article Section */}
      {featuredArticle && activeCategory === "All" && (
        <div className="featured-animation-item w-full border border-neutral-100 dark:border-neutral-900 rounded-3xl overflow-hidden bg-neutral-50/30 dark:bg-neutral-950/20 group transition-all duration-300">
          <Link
            to={`/articles/${featuredArticle.slug}`}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 items-center select-none"
          >
            {/* Featured Image */}
            <div className="lg:col-span-7 overflow-hidden rounded-2xl aspect-[16/9] w-full border border-neutral-100/50 dark:border-neutral-900 bg-neutral-50 dark:bg-neutral-900">
              <img
                src={featuredArticle.coverImage}
                alt={featuredArticle.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.01]"
              />
            </div>

            {/* Featured Content Info */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="flex flex-wrap gap-2 items-center">
                <Badge
                  variant="outline"
                  className="text-[10px] font-mono tracking-widest uppercase font-semibold bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 border-transparent py-0.5"
                >
                  {language === "id" ? "Artikel Terpopuler" : "Top Article"}
                </Badge>
                <span className="text-neutral-300 dark:text-neutral-700 text-xs">
                  •
                </span>
                <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                  {featuredArticle.readingTime.replace(
                    "min read",
                    language === "id" ? "menit baca" : "min read",
                  )}
                </span>
                <span className="text-neutral-300 dark:text-neutral-700 text-xs">
                  •
                </span>
                <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 flex items-center gap-1">
                  {featuredArticle.views?.toLocaleString()}{" "}
                  {language === "id" ? "dilihat" : "views"}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 transition-colors duration-200 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 leading-tight">
                  {featuredArticle.title}
                </h2>
                <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 font-light leading-relaxed line-clamp-3">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="text-xs font-mono text-neutral-400 mt-2">
                <span>
                  {new Date(featuredArticle.publishedAt).toLocaleDateString(
                    "en-US",
                    { month: "short", day: "numeric", year: "numeric" },
                  )}
                </span>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* B. Clean Category Filters and Heading */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-neutral-100 dark:border-neutral-900 pb-6">
        <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
          {activeCategory === "All"
            ? language === "id"
              ? "Semua Artikel"
              : "All Articles"
            : language === "id"
              ? `Artikel ${activeCategory}`
              : `${activeCategory} Articles`}
        </h3>

        {/* Scrollable pill tabs */}
        <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 max-w-full">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-3.5 py-1.5 rounded-full text-[10px] font-mono tracking-wider uppercase font-semibold transition-all select-none cursor-pointer duration-200 ${
                  isActive
                    ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950"
                    : "border border-neutral-200 dark:border-neutral-800 text-neutral-400 dark:text-neutral-500 hover:text-neutral-950 dark:hover:text-neutral-100 hover:border-neutral-400 dark:hover:border-neutral-600"
                }`}
              >
                {category === "All"
                  ? language === "id"
                    ? "Semua"
                    : "All"
                  : category}
              </button>
            );
          })}
        </div>
      </div>

      {/* C. Dynamic Grid Section */}
      {filteredArticles.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center w-full border border-dashed border-neutral-100 dark:border-neutral-900 rounded-3xl">
          <p className="text-sm text-neutral-400 font-light">
            {language === "id"
              ? `Tidak ada artikel dalam kategori "${activeCategory === "All" ? "Semua" : activeCategory}".`
              : `No articles found under "${activeCategory}" category.`}
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-12 w-full ">
          {/* Main Grid */}
          <div className={styleConfig.grid}>
            {paginatedArticles.map((article, index) => (
              <div
                key={`${article.id}-${index}`}
                className="grid-animation-item w-full"
              >
                <ArticleCard article={article} />
              </div>
            ))}
          </div>

          {/* D. Dynamic Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between border-t border-neutral-100 dark:border-neutral-900 pt-6 mt-4 w-full">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="p-2 rounded-lg text-neutral-400 dark:text-neutral-500 hover:text-neutral-950 dark:hover:text-neutral-100 disabled:opacity-40 disabled:hover:text-neutral-400 dark:disabled:hover:text-neutral-500 transition-colors cursor-pointer disabled:cursor-not-allowed select-none border border-neutral-200/60 dark:border-neutral-800/80 flex items-center justify-center"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 select-none tracking-widest font-semibold">
                {language === "id"
                  ? `HALAMAN ${currentPage} DARI ${totalPages}`
                  : `PAGE ${currentPage} OF ${totalPages}`}
              </span>

              <button
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className="p-2 rounded-lg text-neutral-400 dark:text-neutral-500 hover:text-neutral-950 dark:hover:text-neutral-100 disabled:opacity-40 disabled:hover:text-neutral-400 dark:disabled:hover:text-neutral-500 transition-colors cursor-pointer disabled:cursor-not-allowed select-none border border-neutral-200/60 dark:border-neutral-800/80 flex items-center justify-center"
                aria-label="Next page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default ArticlesSection;
