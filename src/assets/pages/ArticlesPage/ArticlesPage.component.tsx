import { Title } from "@/assets/atoms";
import { SEO } from "@/assets/features";
import { ArticlesSection } from "@/assets/organisms";
import { styleConfig } from "./ArticlesPage.config";
import { useLanguage } from "@/context/LanguageContext";

const ArticlesPage = () => {
  const { language } = useLanguage();

  const t = {
    en: {
      seoTitle: "Articles — Software Engineering & Web Architecture | Febryan Hernanda",
      seoDesc: "Technical articles on software engineering, system design, scalable web architecture, and modern development practices by Febryan Hernanda.",
      title: "Articles",
      subtitle: "Thoughts on software engineering, scalable systems, UI/UX, and building better digital products.",
    },
    id: {
      seoTitle: "Artikel — Rekayasa Perangkat Lunak & Arsitektur Web | Febryan Hernanda",
      seoDesc: "Artikel teknis tentang rekayasa perangkat lunak, desain sistem, arsitektur web berskala, dan praktik pengembangan modern oleh Febryan Hernanda.",
      title: "Artikel",
      subtitle: "Pemikiran tentang rekayasa perangkat lunak, sistem berskala, UI/UX, dan membangun produk digital yang lebih baik.",
    },
  }[language];

  return (
    <>
      <SEO
        title={t.seoTitle}
        description={t.seoDesc}
        path="/articles"
      />
      <div className={styleConfig.wrapper}>
        <div className={styleConfig.headerWrapper}>
          <Title Label={t.title} Type="Bold" className="text-4xl sm:text-5xl" />
          <Title
            Label={t.subtitle}
            Type="subTitle"
            className="text-base sm:text-lg text-neutral-500 font-light mt-1"
          />
        </div>
        <ArticlesSection />
      </div>
    </>
  );
};

export default ArticlesPage;
