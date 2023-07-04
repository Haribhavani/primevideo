// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const settings = {
    dots: false,
    slideToScroll: 1,
    slideToShow: 4,
  }
  const {moviesList} = props
  return (
    <>
      <Slider {...settings}>
        {moviesList.map(each => (
          <MovieItem movieDetails={each} key={each.id} />
        ))}
      </Slider>
    </>
  )
}
export default MoviesSlider
