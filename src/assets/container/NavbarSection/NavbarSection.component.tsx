import { NavLink } from "react-router-dom";
import { styleConfig } from "./NavbarSection.config";

const NavbarSection = () => {
  return (
    <nav className={styleConfig.wrapper}>
      <div className={styleConfig.navContainer}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styleConfig.isActive : styleConfig.notActive
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/work-experience"
          className={({ isActive }) =>
            isActive ? styleConfig.isActive : styleConfig.notActive
          }
        >
          Work Experience
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
    </nav>
  );
};

export default NavbarSection;
