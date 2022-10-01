// Write your code here
import {Component} from 'react'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

class MovieItem extends Component {
  render() {
    const {movie} = this.props
    const {thumbnailUrl, videoUrl} = movie
    return (
      <div>
        <Popup
          modal
          trigger={
            <button type="button" className="thumbnail-button">
              <img
                src={thumbnailUrl}
                alt="thumbnail"
                className="thumbnail-img"
              />
            </button>
          }
        >
          {close => (
            <div className="popup-container">
              <button
                testid="closeButton"
                className="close-button"
                type="button"
                onClick={() => close()}
              >
                <IoMdClose className="close-icon" />
              </button>
              <ReactPlayer url={videoUrl} />
            </div>
          )}
        </Popup>
      </div>
    )
  }
}
export default MovieItem
