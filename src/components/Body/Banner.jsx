import "./Banner.css";
import axios from "../../../utils/api";
import request from "../../../utils/request";
import { useEffect, useState } from "react";

function Banner() {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    axios.get(`${request.originals}`)
      .then((res) =>setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length)]))
      .catch((err) => console.log(err));
  }, []);

function truncate(text, max, ellipsis = '...'){
    return text.length <= max ? text : `${text.slice(0, max)}${ellipsis}`
}
  return (
    <>
      <section className="banner">
        <div className="poster">
            {window.innerWidth < 600 ? <img src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} alt="" /> :  <img src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt="" />}
        </div>
        <div className="info">
            <h1>{movie?.original_name || movie?.name}</h1>
            <div className="btn">
                <button>Play</button>
                <button>Add to my list</button>
            </div>
            <div className="description">
                {window.innerWidth < 600 ? movie && truncate(movie?.overview,90) : movie && truncate(movie?.overview,150)}
            </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
