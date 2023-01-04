import { useEffect, useRef, useState } from "react";
import {
  IoEarthOutline,
  IoConstructOutline,
  IoCode,
  IoNewspaperOutline,
  IoChatbubblesOutline,
  IoEllipsisHorizontal,
} from "react-icons/io5";
import MobileNavPopOS from "./MobileNavPopOS";
import { Link, NavLink } from "react-router-dom";
import ComingSoon from "../../ComingSoon";

const NavPopOS = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const buttonMobileNavRef = useRef();
  const mobileNavRef = useRef();

  useEffect(() => {
    const closeMobileNav = (e) => {
      if (
        !e.path.includes(buttonMobileNavRef.current) &&
        !e.path.includes(mobileNavRef.current)
      ) {
        setOpenMobileNav(false);
      }
    };
    document.body.addEventListener("click", closeMobileNav);

    return () => document.body.removeEventListener("click", closeMobileNav);
  }, []);

  return (
    <div className="ml-4 flex gap-6 text-gray-400 text-lg">
      {/* <NavLink to="/" className={({isActive}) => (isActive ? 'border-b-2 border-gray-200 text-gray-200' : 'border-b-2 border-transparent') + ' flex items-center'}>
          <span className="flex items-center gap-1 px-2 py-0.5 hover:bg-gray-200 hover:bg-opacity-20 hover:text-gray-200 rounded-lg transition ease-in-out">
            <IoEarthOutline /> Home
          </span>
        </NavLink> */}
      <a
        href="/"
        className={`active:border-b-2 active:border-gray-200 active:text-gray-200 border-b-2 border-transparent flex items-center`}
      >
        <span className="flex items-center gap-1 px-2 py-0.5 hover:bg-gray-200 hover:bg-opacity-20 hover:text-gray-200 rounded-lg transition ease-in-out">
          <IoEarthOutline /> Home
        </span>
      </a>
      {/* <a href="#experience" className="hidden sm:flex items-center border-b-2 border-transparent focus:border-b-2 focus:border-gray-300 focus:text-gray-300">
          <span className="flex items-center gap-1 px-2 py-0.5 hover:bg-gray-200 hover:bg-opacity-20 hover:text-gray-200 rounded-lg transition ease-in-out">
            <IoConstructOutline /> Experience
          </span>
        </a> */}
      <a
        href="/#projects"
        className="hidden md:flex items-center border-b-2 border-transparent focus:border-b-2 focus:border-gray-300 focus:text-gray-300"
      >
        <span className="flex items-center gap-1 px-2 py-0.5 hover:bg-gray-200 hover:bg-opacity-20 hover:text-gray-200 rounded-lg transition ease-in-out">
          <IoCode /> Projects
        </span>
      </a>
      <a
        href="/#contact"
        className="hidden md:flex items-center border-b-2 border-transparent focus:border-b-2 focus:border-gray-300 focus:text-gray-300"
      >
        <span className="flex items-center gap-1 px-2 py-0.5 hover:bg-gray-200 hover:bg-opacity-20 hover:text-gray-200 rounded-lg transition ease-in-out">
          <IoChatbubblesOutline /> Contact
        </span>
      </a>
      <a
        href="/Resume_Carlos_Daniel_Lopez_2023.pdf"
        target="_blank"
        className="hidden lg:flex items-center border-b-2 border-transparent focus:border-b-2 focus:border-gray-300 focus:text-gray-300"
      >
        <span className="flex items-center gap-1 px-2 py-0.5 hover:bg-gray-200 hover:bg-opacity-20 hover:text-gray-200 rounded-lg transition ease-in-out">
          <IoNewspaperOutline /> Resume
        </span>
      </a>
      <NavLink
        to="/my-anime"
        className={`active:border-b-2 active:border-gray-200 active:text-gray-200 border-b-2 border-transparent hidden lg:flex items-center`}
      >
        <span className="relative flex items-center gap-1 px-2 py-0.5 hover:bg-gray-200 hover:bg-opacity-20 hover:text-gray-200 rounded-lg transition ease-in-out z-10">
          🍥 My anime
          {/* <ComingSoon right={"right-[5px]"} top={"top-[30px]"} text="text-xs" /> */}
        </span>
      </NavLink>
      <div
        ref={buttonMobileNavRef}
        onClick={() => setOpenMobileNav(!openMobileNav)}
        className="relative lg:hidden flex items-center cursor-pointer"
      >
        <IoEllipsisHorizontal className="text-3xl hover:text-gray-200" />
        <MobileNavPopOS
          openMobileNav={openMobileNav}
          mobileNavRef={mobileNavRef}
        />
      </div>
    </div>
  );
};

export default NavPopOS;
