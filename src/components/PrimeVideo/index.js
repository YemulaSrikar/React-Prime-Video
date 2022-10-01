// Write your code here
import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'

import './index.css'

class PrimeVideo extends Component {
  state = {actionMovies: [], comedyMovies: []}

  componentDidMount() {
    this.renderMovies()
  }

  renderMovies = () => {
    const {moviesList} = this.props
    const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
    const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')
    this.setState({actionMovies, comedyMovies})
  }

  render() {
    const {actionMovies, comedyMovies} = this.state

    return (
      <div className="prime-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-video-image"
        />

        <h1 className="heading">Action Movies</h1>
        <MoviesSlider movies={actionMovies} />
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider movies={comedyMovies} />
      </div>
    )
  }
}
export default PrimeVideo
