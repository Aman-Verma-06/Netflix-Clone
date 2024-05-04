import '../CardTitles/CardTitle.css'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const CardTitle = ({ title, category }) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGFkMzAzNDQwNjBhMjU5NWNlM2JkNzZhMGJjMTJkNyIsInN1YiI6IjY2MzU0MjM4YWQ1OWI1MDEyYjZlMTBlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SveNEFxnIV-SRnU55uoMzC2INXVo0B_gi3A8LcUzbBQ'
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])

  return (
    <>
    <div className="cardtitle-container">
      <h2>{title ? title : 'Popular on Netfly Trailers'}</h2>
      <div className="card-list" ref={cardsRef}>
        {
          apiData.map((item, index) => {
            return(<>
            <Link to={`/player/${item.id}`} className="cards" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+item.backdrop_path} alt={item.backdrop_path} />
              <p>{item.original_title}</p>
            </Link>
            </>)
          })
        }
      </div>
    </div>
    </>
  )
}

export default CardTitle
