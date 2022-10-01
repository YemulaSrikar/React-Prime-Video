// Write your code here
import {Component} from 'react'
import Slider from 'react-slick'

import './index.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

class MoviesSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    }
    const {movies} = this.props
    return (
      <div className="cont">
        <Slider className="sliderContainer" {...settings}>
          {movies.map(each => (
            <MovieItem key={each.id} movie={each} />
          ))}
        </Slider>
      </div>
    )
  }
}

export default MoviesSlider
