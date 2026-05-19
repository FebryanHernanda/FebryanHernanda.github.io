const styleConfig = {
  container:
    "flex flex-col gap-5 w-full transition-all duration-300 group cursor-pointer h-full",
  imageWrapper: "relative overflow-hidden rounded-3xl w-full h-[200px] sm:h-[220px] bg-neutral-50 border border-neutral-100/80 dark:border-neutral-900",
  image: "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105",
  contentWrapper: "flex-1 flex flex-col justify-between gap-4",
  title: "text-2xl font-bold tracking-tight text-neutral-900 line-clamp-2 h-16 transition-colors duration-200 group-hover:text-neutral-700",
  excerpt: "text-sm text-neutral-500 font-light line-clamp-2 leading-relaxed",
  metaWrapper: "flex items-center gap-2 text-xs font-mono text-neutral-400 mt-1",
  badge: "text-[10px] font-mono tracking-wider bg-neutral-50 text-neutral-500 px-2 py-0.5 rounded-full border border-neutral-100",
  tagsWrapper: "flex flex-wrap gap-2 items-center mt-1",
  footerWrapper: "flex flex-row justify-between items-center w-full mt-4",
};

export { styleConfig };
