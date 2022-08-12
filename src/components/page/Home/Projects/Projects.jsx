import React from "react";
import StructureProjects from "./StructureProjects";
import MatrixPill from "./MatrixPill";
import {useState} from "react";

const Projects = () => {
  const [projectType, setProjectType] = useState("Front End");
  return (
    <div id="projects" className="mt-12 lg:mx-32">
      <h1 className="matrix-text text-6xl sm:text-8xl text-center"><span className="text-7xl sm:text-9xl">P</span>ROJECT<span className="text-7xl sm:text-9xl">S</span></h1>
      <div className="flex justify-around sm:justify-between items-center my-20 sm:mx-16 relative z-50">
        <button onClick={() => {setProjectType("Full Stack")}} className="flex flex-col justify-center items-center transition ease-in-out delay-150 hover:-translate-y-[10%] duration-200 cursor-pointer grayscale-[30%] hover:grayscale-0">
            <MatrixPill red={true} />
          <p className="mt-6 sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-800">Full Stack projects</p>
        </button>
        <button onClick={() => {setProjectType("Front End")}} className="flex flex-col justify-center items-center transition ease-in-out delay-150 hover:-translate-y-[10%] duration-200 cursor-pointer grayscale-[30%] hover:grayscale-0">
          <MatrixPill red={false} />
          <p className="mt-6 sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-800 to-sky-400">Front End projects</p>
        </button>
      </div>
      <StructureProjects projectType={projectType} />
    </div>
  );
};

export default Projects;
