import React from "react";
import GridProjects from "./GridProjects";
import MatrixPill from "./MatrixPill";

const Projects = () => {
  return (
    <div id="projects" className="mt-12 lg:mx-32">
      <h1 className="matrix-text text-6xl sm:text-8xl text-center"><span className="text-7xl sm:text-9xl">P</span>ROJECT<span className="text-7xl sm:text-9xl">S</span></h1>
      <div className="flex justify-around sm:justify-between items-center my-20 sm:mx-16">
        <div className="flex flex-col justify-center items-center transition ease-in-out delay-150 hover:-translate-y-[10%] duration-200 cursor-pointer grayscale-[30%] hover:grayscale-0">
            <MatrixPill red={true} />
          <p className="mt-6 sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-800">Full Stack projects</p>
        </div>
        <div className="flex flex-col justify-center items-center transition ease-in-out delay-150 hover:-translate-y-[10%] duration-200 cursor-pointer grayscale-[30%] hover:grayscale-0">
          <MatrixPill red={false} />
          <p className="mt-6 sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-800 to-sky-400">Front End projects</p>
        </div>
      </div>
      <GridProjects type="true" />
    </div>
  );
};

export default Projects;
