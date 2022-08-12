import { Buttons } from "../../../pop-os/header/Buttons";
import { IoLogoGithub, IoOpenOutline } from "react-icons/io5";

const ProjectCard = ({ project, projectType }) => {
  return (
    <div className="relative mt-16">
      <div className="w-[90%] md:w-[70%] ml-5 md:m-auto">
        <img
          className={`${projectType === "Front End" ? "border-sky-500" : "border-red-500"} shadow-xl border-[5px] p-1`}
          src={project.image}
          alt={"Carlos Daniel" + project.title}
        />
      </div>
      <div className="absolute right-[6%] md:right-[15%] -top-[25px] z-10 cursor-default">
        <p className={`${projectType === "Front End" ? "after:text-sky-600" : "after:text-red-600"} text-pink-600 font-bold after:absolute after:left-[24px] w-fit after:top-[1px] after:content-['FEATURED'] after:-z-10 before:content-['📢_']`}>
          <span className={`${projectType === "Front End" ? "text-sky-500" : "text-red-500"}`}>FEATURED </span>PROJECT
        </p>
      </div>
      <div className="absolute top-[90%] md:top-[80%] ml-10 md:right-[10%] z-10 text-white w-[85%] md:w-[60%]">
        <div className="bg-slate-800 rounded shadow-xl">
          <div className="border-b border-slate-900 flex items-center justify-between">
            <h3 className="px-4 text-[0.9rem] sm:text-2xl font-bold">
              {project.title}
            </h3>
            <Buttons />
          </div>
          <div className="p-4 text-xs sm:text-sm">{project.description}</div>
        </div>
        <div className={`${projectType === "Front End" ? "text-sky-500"  : "text-red-500"} px-4 mt-4 text-xs sm:text-lg flex gap-6 font-bold`}>
          {project.tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
        <div className="flex gap-4 text-lg sm:text-xl p-4">
          <a className={`${projectType === "Front End" ? "hover:text-sky-500" : "hover:text-red-500"} transition duration-200`} href=""><IoLogoGithub /></a>
          <a className={`${projectType === "Front End" ? "hover:text-sky-500" : "hover:text-red-500"} transition duration-200`} href=""><IoOpenOutline /></a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
