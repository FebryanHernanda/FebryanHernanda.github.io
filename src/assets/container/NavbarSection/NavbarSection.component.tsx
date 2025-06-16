import { Link } from "react-router-dom";

const NavbarSection = () => {
  return (
    <nav className="px-5 lg:px-10">
      <ul className="flex flex-row justify-center w-full gap-10 md:gap-20 py-5 mb-[-1rem] md:mb-[-2.5rem] text-sm ">
        <li className="p-2 rounded-md hover:text-black hover:bg-gray-100">
          <Link to="/">Home</Link>
        </li>
        <li className="p-2 rounded-md hover:text-black hover:bg-gray-100">
          <Link to="/WorkExperience">Work Experience</Link>
        </li>
        <li className="p-2 rounded-md hover:text-black hover:bg-gray-100">
          <Link to="/Articles">articles</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarSection;
