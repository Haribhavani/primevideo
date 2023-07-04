// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div>
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" className="image" />}
        className="pop-content"
      >
        {close => (
          <div className="modal-con">
            <button
              type="button"
              className="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="33" color="grey" />
            </button>
            <div className="player-con">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
