import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Props } from "./ArticleCard.types";
import { styleConfig } from "./ArticleCard.config";
import Tilt from "react-parallax-tilt";
import { useLanguage } from "@/context/LanguageContext";

const ArticleCard = ({ article, className }: Props) => {
  const { language } = useLanguage();
  const { title, slug, excerpt, coverImage, publishedAt, readingTime, tags } =
    article;

  // Format date
  const formattedDate = new Date(publishedAt).toLocaleDateString(language === "id" ? "id-ID" : "en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      to={`/articles/${slug}`}
      className={`block h-full select-none ${className || ""}`}
    >
      <div className={styleConfig.container}>
        <Tilt
          tiltMaxAngleX={3}
          tiltMaxAngleY={3}
          glareEnable={true}
          glareMaxOpacity={0.25}
          glareColor="#ffffff"
          glarePosition="all"
          glareBorderRadius="24px"
        >
          <div className={styleConfig.imageWrapper}>
            <img
              src={coverImage}
              alt={title}
              className={styleConfig.image}
              loading="lazy"
            />
          </div>
        </Tilt>

        <div className={styleConfig.contentWrapper}>
          <div className="flex flex-col gap-3">
            <div className={styleConfig.tagsWrapper}>
              {tags.slice(0, 2).map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-[10px] font-mono tracking-wider font-medium bg-transparent text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800"
                >
                  {tag}
                </Badge>
              ))}
              <span className="text-neutral-300 dark:text-neutral-700 text-xs">
                •
              </span>
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                {readingTime.replace("min read", language === "id" ? "menit baca" : "min read")}
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              <h3 className={styleConfig.title}>{title}</h3>
              <p className={styleConfig.excerpt}>{excerpt}</p>
            </div>
          </div>

          <div className={styleConfig.metaWrapper}>
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
