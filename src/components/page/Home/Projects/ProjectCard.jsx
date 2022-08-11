import { Buttons } from "../../../pop-os/header/Buttons";
import { IoLogoGithub, IoOpenOutline } from "react-icons/io5";

const ProjectCard = ({ project }) => {
  console.log();
  return (
    <div className="relative mt-16">
      <div className="w-[90%] md:w-[70%] ml-5 md:m-auto">
        <img
          className="shadow-xl border-[5px] p-1 border-pink-600"
          src={project.image}
          alt={"Carlos Daniel" + project.title}
        />
      </div>
      <div className="absolute right-[6%] md:right-[15%] -top-[25px] z-10 cursor-default">
        <p className="text-pink-600 font-bold after:absolute after:left-[24px] w-fit after:top-[1px] after:content-['FEATURED'] after:text-sky-600 after:-z-10 before:content-['📢_']">
          <span className="text-sky-500">FEATURED </span>PROJECT
        </p>
      </div>
      <div className="absolute top-[90%] md:top-[80%] ml-10 md:right-[10%] z-10 text-white w-[85%] md:w-[60%]">
        <div className="bg-slate-800 rounded shadow-xl">
          <div className="border-b border-slate-900 flex items-center justify-between">
            <h3 className="px-4 text-[0.9rem] sm:text-2xl font-bold">{project.title}</h3>
            <Buttons />
          </div>
          <div className="p-4 text-xs sm:text-sm">
            {project.description}
          </div>
        </div>
        <div className="px-4 mt-4 text-xs sm:text-[1rem] flex gap-6 text-red-500 font-bold">
            <p>React Js</p>
            <p>Next Js</p>
            <p>Tailwind CSS</p>
          </div>
        <div className="flex gap-4 text-lg p-4">
          <IoLogoGithub />
          <IoOpenOutline />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
