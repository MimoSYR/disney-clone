import { useEffect, useState, useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import HrMovieCard from "./HrMovieCard";

const MovieList = ({ genreId, index_ }) => {
  const [movieList, setMovieList] = useState([]);

  const elementRef = useRef(null);

  const sliderRight = (element) => {
    element.scrollLeft += 500;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= 500;
  };

  const getMovieByGenreId = async () => {
    GlobalApi.getMovieByGenreId(genreId)
      .then((resp) => {
        // console.log(resp.data.results);
        setMovieList(resp.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  return (
    <div className="relative">
      <HiChevronLeft
        className={`hidden md:block text-white text-[50px] absolute z-10 top-0 p-2 cursor-pointer ${
          index_ % 3 === 0 ? " mt-[70px]" : " mt-[150px]"
        }`}
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className={`hidden md:block text-white text-[50px] absolute z-10 top-0 right-0 p-2 cursor-pointer ${
          index_ % 3 === 0 ? " mt-[70px]" : " mt-[150px]"
        }`}
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth py-5 px-3">
        {movieList.map((item) => (
          <>
            {index_ % 3 === 0 ? (
              <HrMovieCard key={item.id} movie={item} />
            ) : (
              <MovieCard key={item.id} movie={item} />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
