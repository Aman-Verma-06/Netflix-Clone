import '../Home/Home.css'
import movie_poster_2 from '../../assets/movie_poster_2.jpg'
import { FaPlay } from 'react-icons/fa'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import CardTitle from '../../components/CardTitles/CardTitle'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <div className="home">
        <Header />
        <div className="hero-container">
          <img src={movie_poster_2} alt={movie_poster_2} className='banner-img' />
          <div className="hero-caption">
            {/* <img src={hero_title} alt={hero_title} className='caption-img' /> */}
            {/* <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p> */}
            <div className="hero-btns">
              <button className='btn'>Play<FaPlay style={{ fontSize: '22px' }} /></button>
              <button className='btn info-btn'>More Info<IoIosInformationCircleOutline style={{ fontSize: '30px' }} /></button>
            </div>
            <CardTitle />
          </div>
        </div>
        <div className="more-cards">
          <CardTitle title={"Blockbuster Movies"} category={"top_rated"} />
          <CardTitle title={"Only on Netfly Trailers"} category={"popular"} />
          <CardTitle title={"Upcoming"} category={"upcoming"} />
          <CardTitle title={"Top Pics for You"} category={"now_playing"} />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
