import GenresList from "../constant/GenresList";
import MovieList from "./MovieList";

const GenreMovieList = () => {
  return (
    <div>
      <div>
        {GenresList.genere.map(
          (item, index) =>
            index <= 4 && (
              <div key={item.id} className="p-4 md:p-8 px-4 md:px-12">
                <h2 className="text-white text-[20px] font-bold px-4">
                  {item.name}
                </h2>
                <MovieList genreId={item.id} index_={index} />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default GenreMovieList;
