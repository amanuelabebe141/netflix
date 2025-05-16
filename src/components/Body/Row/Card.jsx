import React, { useEffect, useState } from 'react'
import axios from '../../../../utils/api'
import './Card.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

function Card({ title, fetch }) {
  const [movie, setMovie] = useState(null)
  const [trailer, setTrailer] = useState(null)
  const [visibile, setVisible] = useState(false)

  useEffect(() => {
    axios.get(fetch)
      .then(res => setMovie(res.data.results))
      .catch(err => console.log(`Unable to fetch movies ${err.message}`))
  }, [fetch])

  useEffect(() => {
    const containers = document.querySelectorAll('.movie-container');
  
    const handleDrag = (container) => {
      let isDragging = false;
      let startPosition = 0;
      let scrollLeft = 0;
  
      const startDrag = (e) => {
        isDragging = true;
        container.classList.add('active');
        startPosition = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
      };
  
      const stopDrag = () => {
        isDragging = false;
        container.classList.remove('active');
      };
  
      const doDrag = (e) => {
        if (!isDragging) return;
        const x = e.pageX - container.offsetLeft;
        const dragDistance = (x - startPosition) * 2;
        container.scrollLeft = scrollLeft - dragDistance;
      };
  
      container.addEventListener('mousedown', startDrag);
      container.addEventListener('mouseleave', stopDrag);
      container.addEventListener('mouseup', stopDrag);
      container.addEventListener('mousemove', doDrag);
    };
  
    containers.forEach(container => handleDrag(container));
  }, []);
  async function showTrailer(movieName) {
    try {
        const url = await movieTrailer(movieName)
       const videoID = new URL(url).searchParams.get('v')
       setTrailer(videoID)
       setVisible(true)
    } catch (error) {
        console.log('Trailer not found')
        setVisible(false)
    }
  }
  function closeTrailer(){
    setVisible(false)
  }
  return (
    <div className='card'>
      <h1>{title}</h1>
      <div className="movie-container">
        {
          movie?.map((item, index) =>
            <div className="single" key={index} onClick={()=>showTrailer(item.title || item.original_title || item.name)}>
              <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt='Poster' />
              <p>{item.title || item.original_title || item.name}</p>
            </div>
          )
        }
      </div>
      {visibile && 
           <div className='video-container' onClick={closeTrailer}>
            <div className="video">
              <Youtube videoId={trailer} 
              opts={{
                height: '450',
                width: '800',
                playerVars: { autoplay: 1 },
              }}/>
            <button className='close-btn' onClick={closeTrailer}>Close</button>
            </div>
           </div>
        }

    </div>
)
}

export default Card
