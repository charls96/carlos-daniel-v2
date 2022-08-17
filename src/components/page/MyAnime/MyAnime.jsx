import AnimesData from "./AnimesData";
import AnimeCard from "./AnimeCard";
import Footer from "../../footer/Footer";

const MyAnime = () => {
  return (
    <div className="bg-gradient-to-t from-slate-900 via-slate-900 to-slate-800 h-[80vh] overflow-y-auto overflow-x-hidden text-gray-300 relative flex flex-col gap-28 z-0">
      <h1 className="text-center mt-20 text-5xl sm:text-7xl font-bold text-pink-500">
        My must watch animes
      </h1>
      <div className="max-w-[90%] m-auto flex flex-col gap-32">
        {AnimesData.map((anime) => {
          return <AnimeCard key={anime.id} anime={anime} />;
        })}
      </div>
      <div className="mb-28">
        <Footer />
      </div>
    </div>
  );
};

export default MyAnime;
