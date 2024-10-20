const iconTech = [
  {
    id: 1,
    nama: "HTML",
    url: "assets/Icon/TechStack/HTML.svg",
  },
  {
    id: 2,
    nama: "Javascript",
    url: "assets/Icon/TechStack/javascript.svg",
  },
  {
    id: 3,
    nama: "CSS",
    url: "assets/Icon/TechStack/CSS.svg",
  },
  {
    id: 4,
    nama: "Typescript",
    url: "assets/Icon/TechStack/typescript.svg",
  },
  {
    id: 5,
    nama: "React",
    url: "assets/Icon/TechStack/react.svg",
  },
  {
    id: 6,
    nama: "NextJs",
    url: "assets/Icon/TechStack/nextjs.svg",
  },
  {
    id: 7,
    nama: "TailwindCSS",
    url: "assets/Icon/TechStack/tailwind.svg",
  },
  {
    id: 8,
    nama: "Bootstrap",
    url: "assets/Icon/TechStack/bootstrap.svg",
  },
  {
    id: 9,
    nama: "Python",
    url: "assets/Icon/TechStack/python.svg",
  },
  {
    id: 10,
    nama: "Git",
    url: "assets/Icon/TechStack/git.svg",
  },
  {
    id: 11,
    nama: "GitHub",
    url: "assets/Icon/TechStack/github.svg",
  },
  {
    id: 12,
    nama: "Visual Studio Code",
    url: "assets/Icon/TechStack/visualstudiocode.svg",
  },
  {
    id: 13,
    nama: "Adobe Xd",
    url: "assets/Icon/TechStack/adobeXD.svg",
  },
  {
    id: 14,
    nama: "Figma",
    url: "assets/Icon/TechStack/figma.svg",
  },
  {
    id: 15,
    nama: "Photoshop",
    url: "assets/Icon/TechStack/photoshop.svg",
  },
];

const getIconList = () => {
  const iconList = document.getElementById("icon");
  for (let i = 0; i < iconTech.length; i++) {
    const newImageList = document.createElement("img");
    const listItem = document.createElement("li");
    const listImage = iconTech[i];
    const imgUrl = listImage.url;
    newImageList.src = imgUrl;
    listItem.appendChild(newImageList);

    iconList.appendChild(listItem);
  }
};

getIconList();

// date
const weekdayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dateTes = () => {
  const date = new Date();
  const dateNum = date.getDate();
  const day = weekdayList[date.getDay()];
  const month = monthList[date.getMonth()];
  const year = date.getFullYear();

  const dateFinal = `${day}, ${dateNum} ${month} ${year}`;
  console.log(dateFinal);

  document.getElementById("date").textContent = dateFinal;
};

dateTes();

/* Hamburger Nav */

const menuList = document.getElementById("menu-list");
const hamMenu = document.getElementById("ham-menu");

menuList.style.maxHeight = "0px";

hamMenu.addEventListener("click", () => {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "300px";
  } else {
    menuList.style.maxHeight = "0px";
  }
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    menuList.style.maxHeight = "0px";
  })
);

/* end of humberger */

const buttonMore = document.getElementById("button-more");
buttonMore.addEventListener("click", () => {
  alert(
    "This page is still under construction, but we're working hard to bring you an amazing experience! Check back soon"
  );
});

/* card content */

const dataShowcase = [
  {
    id: 1,
    name: "Karangsuci Page",
    tools: "NextJS, Typescript, & Tailwind CSS",
    info: "I'm diving headfirst into the world of professional web development with my first company profile website! I'm using powerful tools like Next.js, TypeScript, and Tailwind CSS to build it quickly and efficiently. This project is still in progress, and I'm excited to add a content management system to make it even more dynamic.",
    image: "Assets/Icon/Showcase/karangsuci.png",
    demo: "https://karangsuci-landing.pages.dev",
    repo: "",
  },
  {
    id: 2,
    name: "Bookshelf Apps",
    info: "This project, my first foray into HTML, CSS, and JavaScript, showcases a simple Bookshelf App. It features a clean and user-friendly design, allowing users to manage their book collections effortlessly, with a focus on smooth functionality and visual appeal.",
    tools: "HTML, CSS, & Javascript",
    image: "Assets/Icon/Showcase/Bookshelf.png",
    demo: "https://febryanhernanda-showcase.github.io/Bookshelf-Apps/",
    repo: "https://github.com/FebryanHernanda-Showcase/Bookshelf-Apps",
  },
  {
    id: 3,
    name: "Palindrom Checker",
    info: "My second project, built with HTML, CSS, and JavaScript, lets you explore the magic of palindromes. Simply enter any word or sentence, and the program will reveal whether it's a palindrome!",
    tools: "HTML, CSS, & Javascript",
    image: "Assets/Icon/Showcase/palindrom.png",
    demo: "https://febryanhernanda-showcase.github.io/Palindrom-Checker/",
    repo: "https://github.com/FebryanHernanda-Showcase/Palindrom-Checker",
  },
];

const tableData = document.querySelector("#data-showcase tbody");
const cardDisplay = document.getElementById("card-showcase");
const cardContent = document.querySelector(".card-content");
const titleContent = document.getElementById("title-content");
const infoContent = document.getElementById("desc-content");
const repositoryLink = document.getElementById("repository-link");
const liveDemoLink = document.getElementById("livedemo-link");

const tableDataList = () => {
  dataShowcase.forEach((item) => {
    const row = document.createElement("tr");

    row.setAttribute("data-name", item.name);
    row.setAttribute("data-info", item.info);
    row.setAttribute("data-image", item.image);
    row.setAttribute("data-demo", item.demo);
    row.setAttribute("data-repo", item.repo);

    row.innerHTML = `
    <td>${item.name}</td>
    <td>${item.tools}</td>
    `;
    tableData.appendChild(row);
  });
};

tableData.addEventListener("click", (e) => {
  const target = e.target.closest("tr");

  if (target && target.dataset.name) {
    titleContent.textContent = target.dataset.name;
    infoContent.textContent = target.dataset.info;

    if (target.dataset.repo && target.dataset.repo.trim() !== "") {
      repositoryLink.href = target.dataset.repo;
    } else {
      repositoryLink.removeAttribute("href");
    }

    if (target.dataset.demo && target.dataset.demo.trim() !== "") {
      liveDemoLink.href = target.dataset.demo;
    } else {
      liveDemoLink.removeAttribute("href");
    }

    cardDisplay.style.backgroundImage = `url(${target.dataset.image})`;
    cardContent.classList.add("visible");
  }
});

tableDataList();

repositoryLink.addEventListener("click", (e) => {
  if (!repositoryLink.getAttribute("href")) {
    e.preventDefault();
    alert("I'm sorry, repository link is not available.");
  }
});

liveDemoLink.addEventListener("click", (e) => {
  if (!liveDemoLink.getAttribute("href")) {
    e.preventDefault();
    alert("I'm sorry, repository link is not available.");
  }
});

/* end of card content */
