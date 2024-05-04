import { IoArrowBackCircleOutline } from 'react-icons/io5'
import '../Player/Player.css'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({ name: '', key: '', published_at: '', type: '' });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGFkMzAzNDQwNjBhMjU5NWNlM2JkNzZhMGJjMTJkNyIsInN1YiI6IjY2MzU0MjM4YWQ1OWI1MDEyYjZlMTBlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SveNEFxnIV-SRnU55uoMzC2INXVo0B_gi3A8LcUzbBQ'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results[0]))
      .catch(err => console.error(err));
  }, [])

  return (
    <div className='player-container'>
      <IoArrowBackCircleOutline className='back-icon' onClick={() => navigate('/')} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
