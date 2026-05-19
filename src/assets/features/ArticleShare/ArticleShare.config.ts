export const shareTranslations = {
  en: {
    shareTitle: "Share Article",
    triggerText: "Enjoyed this article? Share it with your network.",
    triggerBtn: "Share Article",
    copied: "Copied!",
    copyLink: "Copy",
    close: "Close",
    author: "Febryan Hernanda Mashudi",
    by: "by",
  },
  id: {
    shareTitle: "Bagikan Artikel",
    triggerText: "Suka artikel ini? Bagikan ke jejaring Anda.",
    triggerBtn: "Bagikan Artikel",
    copied: "Disalin!",
    copyLink: "Salin",
    close: "Tutup",
    author: "Febryan Hernanda Mashudi",
    by: "oleh",
  },
};

export const styleConfig = {
  // Trigger Card at the bottom of the article
  triggerCard:
    "w-full pt-8 pb-4 border-t border-neutral-100 dark:border-neutral-900 mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
  triggerText: "text-sm text-neutral-500 dark:text-neutral-400 font-sans",
  triggerBtn:
    "inline-flex items-center justify-center gap-2 h-9 px-4 rounded-lg bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-xs font-mono tracking-wide hover:opacity-90 active:scale-95 transition-all select-none cursor-pointer border border-transparent outline-hidden",

  // Modal Backdrop
  backdrop:
    "fixed inset-0 bg-neutral-950/40 dark:bg-neutral-950/60 backdrop-blur-xs z-50 flex items-center justify-center p-4",

  // Modal Container
  modal:
    "relative w-full max-w-md bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-2xl p-5 flex flex-col gap-4 text-left",

  // Modal Header
  header:
    "flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-900",
  title:
    "text-xs font-mono tracking-wider uppercase text-neutral-400 font-semibold",
  closeBtn:
    "p-1 rounded-md text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors cursor-pointer border border-transparent outline-hidden",

  // Snippet Preview
  previewCard:
    "p-3.5 rounded-lg bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-900/60 flex flex-col gap-1.5 text-left",
  previewBadge:
    "text-[9px] font-mono uppercase tracking-wider text-neutral-400 font-semibold",
  previewTitle:
    "text-xs font-bold font-sans text-neutral-800 dark:text-neutral-200 line-clamp-1",
  previewAuthor: "text-[10px] font-sans text-neutral-500 dark:text-neutral-400",
  previewDesc:
    "text-[11px] font-sans text-neutral-400 dark:text-neutral-500 line-clamp-2 leading-relaxed",

  // Input Copy
  copyRow: "flex items-center w-full",
  copyInput:
    "flex-1 h-9 px-3 rounded-l-lg bg-neutral-50/50 dark:bg-neutral-900/20 border border-r-0 border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 text-xs font-mono select-all truncate outline-hidden focus:border-neutral-300 dark:focus:border-neutral-700 transition-colors",
  copyBtn:
    "h-9 px-4 rounded-r-lg bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-xs font-mono font-semibold transition-opacity hover:opacity-90 cursor-pointer flex items-center justify-center gap-1.5 select-none min-w-[70px] border border-transparent outline-hidden",

  // Grid Sharing
  grid: "grid grid-cols-2 gap-2.5 pt-2",
  gridBtn:
    "h-9 px-3 rounded-lg text-xs font-mono flex items-center gap-2 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-200 cursor-pointer select-none outline-hidden",
};
