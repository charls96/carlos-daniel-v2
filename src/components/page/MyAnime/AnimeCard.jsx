const AnimeCard = ({ anime }) => {
  return (
    <div className="flex flex-col xl:flex-row xl:gap-16 m-auto">
      <h2 className="text-4xl mb-4 font-bold xl:hidden">{anime.title}</h2>
      <img className="w-[100%] sm:w-[500px] sm:h-[300px]" src={anime.image} alt="" />
      <div className="max-w-[500px] xl:max-w-none">
        <h2 className="hidden xl:block text-4xl mb-4 font-bold">{anime.title}</h2>
        <p className="mt-4 xl:mt-0">
          {anime.description}
        </p>
        <div className="mt-8 flex items-center gap-8">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src={anime.favoriteCharacterImage}
            alt=""
          />
          <h3 className="font-bold text-2xl">
            Favorite Character{" "}
            <span className="font-bold text-pink-500">
              {anime.favoriteCharacter}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
