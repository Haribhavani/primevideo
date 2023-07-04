// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'
const horrorMovie = 'HORROR'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovieList = moviesList.filter(
    each => each.categoryId === actionMovie,
  )

  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === comedyMovie,
  )

  const horrorMovieList = moviesList.filter(
    each => each.categoryId === horrorMovie,
  )

  return (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="image"
      />
      <div className="movie-con">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMovieList} />
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMoviesList} />
        <h1 className="heading">Horror Movies</h1>
        <MoviesSlider moviesList={horrorMovieList} />
      </div>
    </div>
  )
}
export default PrimeVideo
