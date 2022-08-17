import home from "../../../assets/papirus-icons/home.svg";
import experience from "../../../assets/papirus-icons/experience.svg";
import projects from "../../../assets/papirus-icons/projects.svg";
import contact from "../../../assets/papirus-icons/contact.svg";
import resume from "../../../assets/papirus-icons/resume.svg";
import { NavLink } from "react-router-dom";
import ComingSoon from "../../ComingSoon";

const FooterPopOs = () => {
  const bounceOnce = (e) => {
    e.target.classList.add("bounce-once");
    setTimeout(() => {
      e.target.classList.remove("bounce-once");
    }, 1000);
  };
  return (
    <div className="hidden sm:block fixed bottom-[-0.1rem] max-w-[80rem] w-[90vw]">
      <div className="relative bg-[#272424] w-[24.2rem] h-[1rem] m-auto border-[1px] border-black rounded-t">
        {/* <NavLink to="/" className={({isActive}) => (isActive ? 'is-active-footer-link' : '') + ' absolute bottom-[-0.3rem] sm:left-[0.5rem]'}>
          <img
            onClick={(e) => {
              bounceOnce(e);
            }}
            className="transition ease-in-out delay-150 hover:-translate-y-[15%] duration-200 hover:scale-100 scale-75 sm:w-16 sm:h-16"
            src={home}
            alt="carlos-daniel-home.svg"
          />
        </NavLink> */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            bounceOnce(e);
          }}
          className={`focus:is-active-footer-link absolute bottom-[-0.3rem] sm:left-[0.5rem]`}
        >
          <img
            className="transition ease-in-out delay-150 hover:-translate-y-[15%] duration-200 hover:scale-100 scale-75 sm:w-16 sm:h-16"
            src={home}
            alt="carlos-daniel-home.svg"
          />
        </a>
        <a
          href="/#experience"
          onClick={(e) => {
            e.preventDefault();
            bounceOnce(e);
          }}
        >
            <img
              className="transition ease-in-out delay-150 hover:-translate-y-[15%] duration-200 hover:scale-100 absolute bottom-[0rem] sm:left-[4.5rem] scale-75 sm:w-14 sm:h-14"
              src={experience}
              alt="carlos-daniel-experience.svg"
            />
        </a>

        <a
          href="/#projects"
          onClick={(e) => {
            bounceOnce(e);
          }}
        >
          <img
            className="transition ease-in-out delay-150 hover:-translate-y-[15%] duration-200 hover:scale-100 absolute bottom-[0rem] sm:left-[8.5rem] scale-75 sm:w-14 sm:h-14"
            src={projects}
            alt="carlos-daniel-experience.svg"
          />
        </a>
        <a
          href="/#contact"
          onClick={(e) => {
            bounceOnce(e);
          }}
        >
          <img
            className="transition ease-in-out delay-150 hover:-translate-y-[15%] duration-200 hover:scale-100 absolute bottom-[0rem] sm:left-[12.5rem] scale-75 sm:w-14 sm:h-14"
            src={contact}
            alt="carlos-daniel-experience.svg"
          />
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          onClick={(e) => {
            bounceOnce(e);
          }}
        >
          <img
            className="transition ease-in-out delay-150 hover:-translate-y-[15%] duration-200 hover:scale-100 absolute bottom-[0.1rem] sm:left-[16.5rem] scale-75 sm:w-[3.1rem] sm:h-[3.1rem]"
            src={resume}
            alt="carlos-daniel-experience.svg"
          />
        </a>

        <a
          href="/"
          to="/my-anime"
          onClick={(e) => {
            e.preventDefault();
            bounceOnce(e);
          }}
          className={
            (({ isActive }) => (isActive ? "is-active-footer-link" : "")) +
            "relative"
          }
        >
          <span className="transition ease-in-out delay-150 hover:-translate-y-[15%] duration-200 hover:scale-100 absolute bottom-[-0.5rem] sm:left-[20rem] scale-75 sm:text-[2.9rem]">
            🍥
            {/* <ComingSoon right={"-right-[50px]"} top={"top-[5px]"} /> */}
          </span>
        </a>
      </div>
    </div>
  );
};

export default FooterPopOs;
