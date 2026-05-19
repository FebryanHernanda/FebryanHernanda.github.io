const ShowcaseData = [
  {
    media: "img/showcase/showcase1.png",
    mediaAlt: "Karangsuci CMS",
    titleContent: "Karangsuci CMS",
    category: "Company Profile & CMS",
    descContent:
      "Company profile website and internal CMS built to simplify content management and strengthen digital presence.",
    linkDemo: "https://karangsuci.com",
    tools: [
      {
        src: "img/Icon/nextjs.png",
        description: "NextJS Icon",
        label: "Next.js",
      },
      {
        src: "img/Icon/ts.png",
        description: "TypeScript Icon",
        label: "TypeScript",
      },
      {
        src: "img/Icon/tailwind.png",
        description: "Tailwind Icon",
        label: "Tailwind",
      },
    ],
  },
  {
    media: "img/showcase/showcase5.png",
    mediaAlt: "Personal Portfolio Website",
    titleContent: "Personal Portfolio Website",
    category: "Frontend Engineering",
    descContent:
      "Modern portfolio website focused on clean UI, smooth interactions, responsive experience, and scalable frontend architecture.",
    linkDemo: "https://dimasherlyandinna.vercel.app",
    tools: [
      {
        src: "img/Icon/nextjs.png",
        description: "NextJS Icon",
        label: "Next.js",
      },
      {
        src: "img/Icon/ts.png",
        description: "TypeScript Icon",
        label: "TypeScript",
      },
      {
        src: "img/Icon/materialui.png",
        description: "Material UI Icon",
        label: "Material UI",
      },
    ],
  },
  {
    media: "img/showcase/showcase7.png",
    mediaAlt: "Russel Pay",
    titleContent: "Russel Pay",
    category: "Fintech Platform",
    descContent:
      "Digital wallet platform focused on secure transactions, intuitive flows, and scalable frontend architecture.",
    linkDemo: "https://github.com/FebryanHernanda/Belalai-E-Wallet-Frontend",
    tools: [
      {
        src: "img/Icon/react.png",
        description: "ReactJS Icon",
        label: "React",
      },
      {
        src: "img/Icon/go.png",
        description: "Go Icon",
        label: "Go",
      },
      {
        src: "img/Icon/postgres.png",
        description: "PostgreSQL Icon",
        label: "PostgreSQL",
      },
    ],
  },
  {
    media: "img/showcase/showcase6.png",
    mediaAlt: "Tickitz",
    titleContent: "Tickitz",
    category: "Booking Platform",
    descContent:
      "Modern movie ticket booking platform built with responsive UI, role-based access, and scalable system architecture.",
    linkDemo: "https://github.com/FebryanHernanda/tickitz-web-app-react",
    tools: [
      {
        src: "img/Icon/react.png",
        description: "ReactJS Icon",
        label: "React",
      },
      {
        src: "img/Icon/go.png",
        description: "Go Icon",
        label: "Go",
      },
      {
        src: "img/Icon/postgres.png",
        description: "PostgreSQL Icon",
        label: "PostgreSQL",
      },
    ],
  },
];

const styleConfig = {
  container: "flex flex-wrap gap-10 px-5 xl:flex-nowrap md:px-10",
  textWrapper:
    "text-center text-[50px] px-5 mt-[-20px] flex gap-2 flex-col w-full h-full xl:w-[700px] xl:text-left xl:sticky xl:top-0",
  mediaWrapper: "flex flex-wrap w-full justify-between gap-10",
};

export { ShowcaseData, styleConfig };
