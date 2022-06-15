import { Component } from 'react';
import Video from './Video';
import './SearchBar.css';

class VideoList extends Component {
  render() {
    let videoArr = this.props.videos.map((video) => (
      <Video key={video.id.videoId} video={video} />
    ));
    return (
      <section >
        {videoArr}
        {!videoArr.length ? (
          <h4 className='msg'>
            "No Search Results Yet! Please submit a search above"
          </h4>
        ) : (
          <ul>{videoArr}</ul>
        )}
      </section>
    );
  }
}

export default VideoList;
