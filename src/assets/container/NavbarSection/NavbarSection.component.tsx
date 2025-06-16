import { NavLink } from "react-router-dom";

const NavbarSection = () => {
  return (
    <nav className="px-5 lg:px-10">
      <div className="flex flex-row justify-center w-full gap-10 mt-5 text-sm md:gap-20 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "p-2 font-normal rounded-md  bg-gray-100"
              : "p-2 rounded-md hover:text-black hover:bg-gray-100"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/WorkExperience"
          className={({ isActive }) =>
            isActive
              ? "p-2 font-normal rounded-md  bg-gray-100"
              : "p-2 rounded-md hover:text-black hover:bg-gray-100"
          }
        >
          Work Experience
        </NavLink>
        <NavLink
          to="/Article"
          className={({ isActive }) =>
            isActive
              ? "p-2 font-normal rounded-md  bg-gray-100"
              : "p-2 rounded-md hover:text-black hover:bg-gray-100"
          }
        >
          Article
        </NavLink>
      </div>
    </nav>
  );
};

export default NavbarSection;
