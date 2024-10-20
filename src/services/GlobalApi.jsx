import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const movieByGenreBaseUrl = "https://api.themoviedb.org/3/discover/movie";

const api_key = "caaf8242f592919308e08f169b0e97b3";

//https://api.themoviedb.org/3/trending/all/day?api_key=5b8b96f22b3e33bc4984384e230e6a09
const getTrendingVideos = axios.get(
  `${movieBaseUrl}/trending/all/day?api_key=${api_key}`
);

const getMovieByGenreId = (id) => {
  return axios.get(
    `${movieByGenreBaseUrl}?api_key=${api_key}&with_genres=${id}`
  );
};

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
