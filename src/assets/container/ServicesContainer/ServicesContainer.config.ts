const styleConfig = {
  container:
    "rounded-3xl bg-[#efefef] flex flex-wrap gap-10 p-5 xl:py-[50px] xl:flex-nowrap",
  title:
    "text-center text-[50px] flex flex-col gap-2 w-full h-full xl:w-[700px] xl:text-left",
  content: "w-full flex flex-wrap justify-rounded justify-between gap-10",
  button: "mt-1 w-32",
  dialogTrigger: "flex",
};

const servicesData = [
  {
    title: "Web Development",
    subtitle:
      "Building responsive and interactive web applications using modern technologies.",
    benefits: [
      "Responsive applications that provide a seamless experience across all devices.",
      "Enhanced interactivity, improving user engagement and satisfaction.",
      "Efficient, well-structured code that allows for scalability and ease of maintenance.",
      "Faster load times and optimized performance, improving SEO and user retention.",
    ],
  },
  {
    title: "UI/UX Design",
    subtitle:
      "Creating user-centered designs that enhance usability and user experience",
    benefits: [
      "Intuitive user interfaces that simplify navigation and increase user satisfaction.",
      "User-centered design that improves usability and meets the needs of diverse audiences.",
      "Stronger brand identity through cohesive and visually appealing design elements.",
      "Higher conversion rates from well-researched, optimized user flows.",
    ],
  },
  {
    title: "Graphic Design",
    subtitle:
      "Designing visual content for branding, marketing, and communication.",
    benefits: [
      "Visually appealing designs that capture attention and reinforce brand identity.",
      "Clear and effective communication through visuals, making messages memorable.",
      "Consistent branding across digital and print media for stronger brand recognition.",
      "Higher engagement with target audiences through well-crafted visual content.",
    ],
  },
  {
    title: "Tech Consulting",
    subtitle:
      "Improving efficiency and innovation via expert technology guidance.",
    benefits: [
      "Customized technology solutions aligned with business goals and needs.",
      "Improved efficiency and streamlined processes through tailored technology recommendations.",
      "Guidance on best practices for adopting and integrating new technologies.",
      "Reduced risk and faster implementation with strategic technology roadmaps.",
    ],
  },
];

export { styleConfig, servicesData };
