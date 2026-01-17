const styleConfig = {
  container: "flex flex-col gap-8 w-full relative pt-5",
  timelineItem: "relative pl-8 md:pl-12 border-l-2 border-zinc-200 dark:border-zinc-800 last:border-l-0 pb-12 last:pb-0",
  timelineDot: "absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-900 dark:bg-white ring-4 ring-white dark:ring-zinc-950 transition-all duration-300 group-hover:scale-125 group-hover:bg-blue-600 dark:group-hover:bg-blue-400",
  card: "flex flex-col gap-4 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow- transition-all duration-300",
  header: "flex flex-col md:flex-row md:items-center justify-between gap-2",
  roleTitle: "text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400",
  companyTitle: "text-lg font-medium text-zinc-600 dark:text-zinc-400 flex items-center gap-2",
  yearBadges: "px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700",
  listContainer: "flex flex-col gap-3 mt-4",
  listItem: "flex items-start gap-3 text-zinc-600 dark:text-zinc-300 leading-relaxed",
  bullet: "mt-2 w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0",
};

export { styleConfig };
