import Footer from "../../footer/Footer";
import Projects from "./Projects/Projects";
import MyIDCard from "./MyIDCard/MyIDCard";
import TimeLine from "./TimeLine/TimeLine";
import MotivationalPhrase from "./MotivationalPhrase";
import HeadingText from "./HeadingText";
import Decoration from "./Decoration";

const Home = () => {
  return (
    <div className="bg-gradient-to-t from-slate-900 via-slate-900 to-slate-800 h-[80vh] overflow-y-auto overflow-x-hidden text-gray-300 relative flex flex-col gap-16 z-0">
      <Decoration />
      <div className="mt-20 mb-12 sm:mt-32 relative z-10">
        <div className="cursor-default opacity-50 hover:opacity-90 absolute -top-[50px] left-[20px] sm:left-[50px] lg:left-[150px] -z-20 transition-all ease-in-out delay-150 duration-300 hover:translate-x-10">
          <div
            className={`text-5xl sm:text-8xl lg:text-9xl text-pink-500 font-extrabold relative z-10`}
          >
            <p
              className={`after:absolute after:left-[3px] after:top-[1px] after:content-['WELCOME!'] after:text-pink-700 after:-z-10`}
            >
              WELCOME!
            </p>
          </div>
        </div>
        <MotivationalPhrase />
      </div>
      <div className="mx-4 sm:mx-6 relative z-10">
        <div className="lg:hidden cursor-default w-full -z-20 transition-all ease-in-out delay-150 duration-300 hover:-translate-y-10">
          <div
            className={`ml-[4px] sm:ml-[34px] text-5xl sm:text-8xl text-sky-500 font-extrabold relative z-10`}
          >
            <p
              className={`after:absolute after:left-[3px] after:top-[1px] after:content-['ABOUT_ME'] after:text-sky-700 after:-z-10`}
            >
              ABOUT ME
            </p>
          </div>
        </div>
        <MyIDCard />
        <div className="hidden lg:block cursor-default absolute -right-[370px] -bottom-[180px] w-full -z-20 transition-all ease-in-out delay-150 duration-300 hover:-translate-x-10 rotate-90">
          <div className={`text-8xl text-sky-500 font-extrabold relative z-10`}>
            <p
              className={`after:absolute after:left-[3px] after:top-[1px] after:content-['ABOUT_ME'] after:text-sky-700 after:-z-10`}
            >
              ABOUT ME
            </p>
          </div>
        </div>
      </div>
      {/* <div className="my-32">
        <TimeLine />
      </div> */}
      <div className="lg:my-32">
        <Projects />
      </div>
      {/*       <p className="text-6xl">effecto cambiar texto del dni para poner cosas sobre mi</p>
      <p className="text-6xl">I know you want to know more from me but wait for the cream (referencia a malditos bastardos)</p>
      <p className="text-6xl">A little mis of these 🧪 and other from that 🧪 we get my skills</p> */}
      <div className="mt-48 md:mt-28 mb-12 sm:mb-24">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
