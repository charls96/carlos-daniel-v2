import {
  IoConstructOutline,
  IoCode,
  IoNewspaperOutline,
  IoChatbubblesOutline,
} from "react-icons/io5";

const MobileNavPopOS = ({ openMobileNav, mobileNavRef }) => {
  return (
    <div
      ref={mobileNavRef}
      className={`${
        openMobileNav ? "visible opacity-100" : "invisible opacity-0"
      } transition-all duration-200 absolute right-0 top-10 bg-[#303030] shadow-lg rounded-lg border border-slate-700 p-2 whitespace-nowrap z-50`}
    >
      {/*  <a href="#experience" className="sm:hidden flex items-center">
        <span className="flex items-center gap-1 px-2 py-0.5 hover:text-gray-200 transition ease-in-out">
          <IoConstructOutline /> Experience
        </span>
      </a> */}
      <a href="#projects" className="md:hidden flex items-center">
        <span className="flex items-center gap-1 px-2 py-0.5 hover:text-gray-200 transition ease-in-out">
          <IoCode /> Projects
        </span>
      </a>
      <a href="#contact" className="md:hidden flex items-center">
        <span className="flex items-center gap-1 px-2 py-0.5 hover:text-gray-200 transition ease-in-out">
          <IoChatbubblesOutline /> Contact
        </span>
      </a>
      <a
        href="/Resume_Carlos_Daniel_Lopez_2023.pdf"
        className="flex items-center"
      >
        <span className="flex items-center gap-1 px-2 py-0.5 hover:text-gray-200 transition ease-in-out">
          <IoNewspaperOutline /> Resume
        </span>
      </a>
      <a href="/" className="flex items-center">
        <span className="flex items-center gap-1 px-2 py-0.5 hover:text-gray-200 transition ease-in-out">
          🍥 My anime
        </span>
      </a>
    </div>
  );
};

export default MobileNavPopOS;
