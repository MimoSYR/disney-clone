import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
// import MovieList from "./MovieList";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

const Slider = () => {
  const [moviesList, setMoviesList] = useState([]);
  const elementRef = useRef(null);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((response) => {
      setMoviesList(response.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 125;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 125;
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute mx-4 mt-[150px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute mx-4 mt-[150px] right-0 cursor-pointer"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-8 md:px-16 py-4 scrollbar-none  scroll-smooth"
        ref={elementRef}>
        {moviesList.map((movie, index) => (
          <img
            key={index}
            src={IMAGE_BASE_URL + movie.backdrop_path}
            alt=""
            className="min-w-full md:h-[310px] object-cover mr-5 rounded-md hover:border-[4px] border-gray-300 transition-all duration-100 ease-in"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
