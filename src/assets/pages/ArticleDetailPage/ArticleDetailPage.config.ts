const styleConfig = {
  wrapper:
    "max-w-[1600px] mx-auto px-5 md:px-10 pt-10 pb-20 min-h-screen flex flex-col items-center",
  articleWrapper: "w-full max-w-[1360px] flex flex-col gap-6",
  backLink:
    "inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-100 transition-colors mb-6 self-start font-mono cursor-pointer select-none",
  metaWrapper:
    "flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400 mt-2",
  title:
    "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight",
  excerpt:
    "text-lg sm:text-xl font-light text-neutral-500 dark:text-neutral-400 leading-relaxed italic border-l-2 border-neutral-200 dark:border-neutral-800 pl-4 py-1 my-2",
  coverWrapper:
    "relative overflow-hidden rounded-3xl w-full h-[300px] sm:h-[400px] md:h-[480px] bg-neutral-50 dark:bg-neutral-900 border border-neutral-100/85 dark:border-neutral-900 my-4",
  coverImage: "w-full h-full object-cover",
  prose:
    "w-full text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 font-light flex flex-col gap-6",
  ctaCard:
    "w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-900 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row justify-between items-center gap-6 mt-12 mb-20",
  ctaTextWrapper: "flex flex-col gap-2 max-w-lg text-center md:text-left",
  ctaTitle:
    "text-lg sm:text-xl font-bold text-neutral-950 dark:text-neutral-50",
  ctaDesc:
    "text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed",
  ctaButton: "font-mono tracking-wider w-full sm:w-auto px-6 py-2.5",
};

export { styleConfig };
