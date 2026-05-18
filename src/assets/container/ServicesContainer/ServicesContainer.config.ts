const styleConfig = {
  container:
    "rounded-3xl bg-[#efefef] dark:bg-zinc-900/30 flex flex-col xl:flex-row gap-12 p-6 md:p-10 xl:py-[70px] transition-all duration-300",
  title:
    "text-center xl:text-left text-[50px] flex flex-col gap-4 w-full xl:w-[420px] xl:sticky xl:top-24 h-fit shrink-0",
  content: "flex flex-col gap-5 w-full",
  card: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 p-6 md:p-8 bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 rounded-3xl shadow-xs hover:shadow-sm hover:translate-y-[-2px] transition-all duration-300 w-full",
  cardTextWrapper: "space-y-2 max-w-xl",
  cardTitle: "text-xl font-bold text-zinc-900 dark:text-zinc-50",
  cardSubtitle:
    "font-mono text-[10px] font-normal text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 uppercase tracking-wider rounded-md bg-zinc-50 dark:bg-zinc-800/40 p-2 w-fit inline-flex items-center shadow-xs",
  cardDescription:
    "text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed",
  cardActionWrapper:
    "flex flex-col sm:items-end gap-3 shrink-0 w-full sm:w-auto",
  priceWrapper: "text-left sm:text-right",
  priceLabel:
    "text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider",
  priceValue: "text-lg font-bold text-zinc-900 dark:text-zinc-50",
  button: "w-full sm:w-32",
};

const servicesData = [
  {
    title: "Landing Page",
    subtitle: "Product & Brand Showcase",
    description:
      "Modern landing pages designed for products, businesses, and personal brands with clean UI and conversion-focused experiences.",
    price: "Starting from 750k+",
    cta: "Discuss Project",
    initialMessage:
      "Hi Febryan, I'd like to discuss a Landing Page project for my product/business: ",
  },
  {
    title: "Company Profile",
    subtitle: "Business Website",
    description:
      "Professional multi-page websites built to strengthen business presence, improve credibility, and communicate services clearly.",
    price: "Starting from 2.5jt+",
    cta: "Discuss Project",
    initialMessage:
      "Hi Febryan, I'm interested in building a Company Profile Website for my business: ",
  },
  {
    title: "Custom Platform",
    subtitle: "Web App & SaaS",
    description:
      "Custom web applications tailored for business workflows, management systems, booking platforms, ecommerce, and operational tools.",
    price: "Custom Pricing",
    cta: "Discuss Project",
    initialMessage:
      "Hi Febryan, I'd like to discuss a Custom Platform or Web App project: ",
  },
  {
    title: "Internal System",
    subtitle: "Dashboard & Operations",
    description:
      "Scalable dashboard systems and internal tools designed to simplify operations, monitoring, and business management workflows.",
    price: "Custom Pricing",
    cta: "Discuss Project",
    initialMessage:
      "Hi Febryan, we'd like to discuss a Dashboard or Internal System project: ",
  },
];

export { styleConfig, servicesData };
