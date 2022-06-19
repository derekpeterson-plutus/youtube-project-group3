import YouTube from 'react-youtube';
import React, { Component } from 'react';
import { useParams, Link } from 'react-router-dom';
import CommentSection from './CommentSection.js';

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class VideoDisplay extends Component {
  VideoPlay = (event) => {
    event.target.playVideo();
  };

  render() {
    const { videoId } = this.props.params;
    return (
      <div>
        <section>
          <YouTube videoId={videoId} onReady={this.VideoPlay} />
          <Link className='new-search-btn-link' to='/'>
            Search New Videos
          </Link>
        </section>
        <section>
          <CommentSection videoId={videoId} />
        </section>
      </div>
    );
  }
}

export default withParams(VideoDisplay);
