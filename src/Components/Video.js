import React  from "react";
import { decode } from "html-entities";
import { Link } from "react-router-dom";

class Video extends React.Component{
    render() {
        const { video } = this.props;
        return (
            <li className="video-li">
              <Link className="thumbnail-links" to={`/videos/${video.id.videoId}`}>
                 <h4 className="thumbnail-links">{decode(video.snippet.title)}</h4>
              </Link>
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
              <p className="upload-date">
                Uploaded on:{" "}
                {video.snippet.publishTime
                    ? video.snippet.publishTime.slice(0, 10)
                    : null}
              </p>
            </li>
        )
    }
}

export default Video;