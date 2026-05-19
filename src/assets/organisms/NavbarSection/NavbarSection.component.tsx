import { useState, useEffect } from "react";
import { NavLink, useLocation, Link, useNavigate } from "react-router-dom";
import { IoHomeSharp, IoBriefcaseSharp, IoNewspaperSharp } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Menu } from "lucide-react";
import { styleConfig } from "./NavbarSection.config";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavbarSection = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Navigation translations
  const t = {
    en: {
      home: "Home",
      services: "Services",
      experience: "Experience",
      articles: "Articles",
    },
    id: {
      home: "Beranda",
      services: "Layanan",
      experience: "Pengalaman",
      articles: "Artikel",
    },
  }[language];

  useEffect(() => {
    const handleScrollSync = () => {
      if (location.hash) {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    if (location.pathname === "/") {
      handleScrollSync();
    } else if (location.hash) {
      navigate(location.pathname + location.search, { replace: true });
    }
  }, [location.pathname, location.hash, location.search, navigate]);

  const LanguageSwitcher = () => (
    <div className="flex items-center gap-0.5 bg-neutral-100/80 dark:bg-neutral-900/50 p-1 rounded-full border border-neutral-200/50 dark:border-neutral-800/80 w-fit">
      <button
        onClick={() => setLanguage("en")}
        className={`px-2.5 py-1 text-[10px] font-mono tracking-wider font-bold uppercase rounded-full transition-all select-none cursor-pointer duration-200 ${
          language === "en"
            ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-sm"
            : "text-neutral-400 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-300"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("id")}
        className={`px-2.5 py-1 text-[10px] font-mono tracking-wider font-bold uppercase rounded-full transition-all select-none cursor-pointer duration-200 ${
          language === "id"
            ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-sm"
            : "text-neutral-400 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-300"
        }`}
      >
        ID
      </button>
    </div>
  );

  return (
    <nav className={`${styleConfig.wrapper} w-full relative flex items-center justify-between`}>
      {/* Desktop Navigation: Centered list only (Visible on md and up) */}
      <div className={`hidden md:flex ${styleConfig.navContainer}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive && !location.hash
              ? styleConfig.isActive
              : styleConfig.notActive
          }
        >
          {t.home}
        </NavLink>

        <NavLink
          to="/#Services"
          className={() =>
            location.pathname === "/" && location.hash === "#Services"
              ? styleConfig.isActive
              : styleConfig.notActive
          }
        >
          {t.services}
        </NavLink>

        <NavLink
          to="/work-experience"
          className={({ isActive }) =>
            isActive ? styleConfig.isActive : styleConfig.notActive
          }
        >
          {t.experience}
        </NavLink>

        <NavLink
          to="/articles"
          className={({ isActive }) =>
            isActive ? styleConfig.isActive : styleConfig.notActive
          }
        >
          {t.articles}
        </NavLink>
      </div>

      {/* Floating Language Selector on Desktop Right (kept outside centered menu flow) */}
      <div className="absolute right-5 lg:right-10 hidden md:block">
        <LanguageSwitcher />
      </div>

      {/* Mobile Navigation: Branding left, Hamburger right (Visible below md) */}
      <div className="flex md:hidden items-center justify-between w-full py-1">
        {/* Left: Brand Identity */}
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
          <img
            src="img/FHLogo.png"
            alt="Febryan Hernanda Logo"
            className="h-7 w-7 object-contain"
          />
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold leading-tight tracking-tight text-neutral-900">
              Febryan Hernanda
            </span>
            <span className="text-[10px] text-neutral-500 font-medium leading-none">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Right: Hamburger trigger & Drawer */}
        <div className="flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 p-0 text-neutral-700 hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:outline-none"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] bg-white border-l border-neutral-100 p-6 flex flex-col justify-between"
            >
              <div className="flex flex-col gap-6">
                <SheetHeader className="text-left border-b border-neutral-100 pb-4">
                  <div className="mx-auto mb-2">
                    <Avatar className="h-16 w-16">
                      <AvatarImage
                        src="img/ava.png"
                        alt="profile picture"
                        className="object-cover"
                      />
                      <AvatarFallback>FH</AvatarFallback>
                    </Avatar>
                  </div>
                  <SheetTitle className="text-center text-sm font-semibold tracking-tight text-neutral-900">
                    Febryan Hernanda
                  </SheetTitle>
                  <SheetDescription className="text-center text-xs text-neutral-500 font-medium">
                    Software Engineer
                  </SheetDescription>
                </SheetHeader>

                {/* Mobile Drawer Menu Links */}
                <div className="flex flex-col gap-2">
                  <NavLink
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive && !location.hash
                        ? styleConfig.sheetItemActive
                        : styleConfig.sheetItem
                    }
                  >
                    <IoHomeSharp className={styleConfig.icon} />
                    {t.home}
                  </NavLink>

                  <NavLink
                    to="/#Services"
                    onClick={() => setIsOpen(false)}
                    className={() =>
                      location.pathname === "/" && location.hash === "#Services"
                        ? styleConfig.sheetItemActive
                        : styleConfig.sheetItem
                    }
                  >
                    <RiCustomerService2Fill className={styleConfig.icon} />
                    {t.services}
                  </NavLink>

                  <NavLink
                    to="/work-experience"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? styleConfig.sheetItemActive
                        : styleConfig.sheetItem
                    }
                  >
                    <IoBriefcaseSharp className={styleConfig.icon} />
                    {t.experience}
                  </NavLink>

                  <NavLink
                    to="/articles"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? styleConfig.sheetItemActive
                        : styleConfig.sheetItem
                    }
                  >
                    <IoNewspaperSharp className={styleConfig.icon} />
                    {t.articles}
                  </NavLink>
                </div>
              </div>

              {/* Mobile Drawer Bottom Copyright & Language Selector */}
              <div className="border-t border-neutral-100 pt-4 flex flex-col gap-4 items-center">
                <LanguageSwitcher />
                <div className="text-[11px] text-neutral-400 text-center">
                  © 2026 Febryan Hernanda.
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSection;
