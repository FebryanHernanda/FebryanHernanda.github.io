import { useEffect, useState } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { styleConfig } from "./NavbarSection.config";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { IoHomeSharp, IoBriefcaseSharp, IoNewspaperSharp } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";

const NavbarSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Handle precise smooth scrolling with a custom offset when hash changes
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        const timer = setTimeout(() => {
          const offset = 80; // Custom breathing room offset in pixels
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 50);
        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  return (
    <nav className={`${styleConfig.wrapper} w-full`}>
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
          Home
        </NavLink>

        <NavLink
          to="/#Services"
          className={() =>
            location.pathname === "/" && location.hash === "#Services"
              ? styleConfig.isActive
              : styleConfig.notActive
          }
        >
          Services
        </NavLink>

        <NavLink
          to="/work-experience"
          className={({ isActive }) =>
            isActive ? styleConfig.isActive : styleConfig.notActive
          }
        >
          Experience
        </NavLink>

        <NavLink
          to="/article"
          className={({ isActive }) =>
            isActive ? styleConfig.isActive : styleConfig.notActive
          }
        >
          Article
        </NavLink>
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
                    Home
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
                    Services
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
                    Experience
                  </NavLink>

                  <NavLink
                    to="/article"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? styleConfig.sheetItemActive
                        : styleConfig.sheetItem
                    }
                  >
                    <IoNewspaperSharp className={styleConfig.icon} />
                    Article
                  </NavLink>
                </div>
              </div>

              {/* Mobile Drawer Bottom Copyright */}
              <div className="border-t border-neutral-100 pt-4 flex flex-col gap-2">
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
