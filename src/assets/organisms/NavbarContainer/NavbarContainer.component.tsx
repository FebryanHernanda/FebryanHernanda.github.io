import { Title } from "@/assets/atoms";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-scroll";

const NavbarContainer = () => {
  return (
    <nav className="fixed flex justify-between w-full max-w-[100rem] bg-[#fff] z-10 shadow-lg p-5 items-center lg:rounded-full lg:h-5 lg:mt-5 lg:p-10 ">
      <ul className="flex gap-10 justify-between items-center">
        <li>
          <Link smooth spy to="Hero">
            <Title Label="Febryan Hernanda Mashudi" Type="Bold" />
          </Link>
        </li>
        <li className="hidden lg:block">
          <Link activeClass="active" smooth spy to="Showcase">
            Showcase
          </Link>
        </li>
        <li className="hidden lg:block">
          <Link activeClass="active" smooth spy to="Services">
            Services
          </Link>
        </li>
      </ul>
      <ul className="flex gap-10">
        <li className="lg:hidden">
          <Button>---</Button>
        </li>
        <li className="hidden lg:block">
          <Title Label="About me" Type="Regular" />
        </li>
        <li className="hidden lg:block">
          <Link activeClass="active" smooth spy to="Contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarContainer;
