import ProjectsData from "./ProjectsData";
import ProjectCard from "./ProjectCard";

const StructureProjects = (projectType) => {
  return (
    <div className="relative">
      {projectType.projectType === "Full Stack" && (
        <div className="ml-4 sm:ml-16 lg:ml-0 cursor-default lg:absolute lg:-left-[45%] lg:top-[300px] w-full z-20 transition-all ease-in-out delay-150 duration-300 hover:translate-x-7 lg:hover:-translate-x-10 lg:-rotate-90">
          <div
            className={`text-5xl sm:text-7xl md:text-8xl w-[105%] lg:text-8xl xl:text-9xl text-red-500 font-extrabold relative z-10`}
          >
            <p
              className={`uppercase after:absolute after:left-[3px] after:top-[1px] after:content-['FULL_STACK'] after:text-red-700 after:-z-10`}
            >
              FULL STACK
            </p>
          </div>
        </div>
      )}

      {projectType.projectType === "Front End" && (
        <div className="ml-4 sm:ml-16 lg:ml-0 cursor-default lg:absolute lg:-left-[45%] lg:top-[300px] w-full z-20 transition-all ease-in-out delay-150 duration-300 hover:translate-x-7 lg:hover:-translate-x-10 lg:-rotate-90">
          <div
            className={`text-5xl sm:text-7xl md:text-8xl w-[105%] lg:text-8xl xl:text-9xl text-sky-500 font-extrabold relative z-10`}
          >
            <p
              className={`uppercase after:absolute after:left-[3px] after:top-[1px] after:content-['FRONT_END'] after:text-sky-700 after:-z-10`}
            >
              Front End
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-60 sm:gap-48">
        {ProjectsData.map(
          (project) =>
            project.type === projectType.projectType && (
              <ProjectCard key={project.id} project={project} projectType={projectType.projectType} />
            )
        )}
      </div>
    </div>
  );
};

export default StructureProjects;
