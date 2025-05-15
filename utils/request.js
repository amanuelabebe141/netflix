const API = import.meta.env.VITE_API;
const request = {
  trending: `/trending/all/week?api_key=${API}&language=en-US`,
  originals: `/discover/tv?api_key=${API}&with_networks=213`,
  rated: `/movie/top_rated?api_key=${API}&language=en-US`,
  action: `/discover/movie?api_key=${API}&with_genres=28`,
  comedy: `/discover/movie?api_key=${API}&with_genres=35`,
  horror: `/discover/movie?api_key=${API}&with_genres=27`,
  romance: `/discover/movie?api_key=${API}&with_genres=10749`,
  documentaries: `/discover/movie?api_key=${API}&with_genres=99`,
};

export default request;

//Example requst
// "https://api.themoviedb.org/3/trending/all/week?api_key=a814e28b771f27658fcc01ba7f7d0541&language=en-US";
