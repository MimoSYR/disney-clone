const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const HrMovieCard = ({ movie }) => {
  return (
    <section className="hover:scale-110 transition-all duration-150 ease-in cursor-pointer">
      <img
        className="w-[110px] md:w-[260px] rounded-lg hover:border-[1px] border-gray-300"
        src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
        alt=""
      />
      <h2 className="w-[110px] md:w-[260px] mt-2">{movie.title}</h2>
    </section>
  );
};

export default HrMovieCard;
