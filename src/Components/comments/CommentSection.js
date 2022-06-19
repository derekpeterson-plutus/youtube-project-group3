import { React, Component } from 'react';
import CommentForm from './CommentForm.js';
import CommentFeed from './CommentFeed.js';
class CommentSection extends Component {
  constructor() {
    super();
    this.state = {
      commentsList: [],
    };
  }
  addComments = (commentorName, userComments) => {
    const { commentsList } = this.state;
    const { videoId } = this.props;
    const stateCommentList = { commentorName, userComments };
    const newComments = [...commentsList, stateCommentList];
    window.localStorage.setItem(videoId, JSON.stringify(newComments));
    this.setState({ commentsList: newComments });
  };
  componentDidMount() {
    const { videoId } = this.props;
    const storedLocalStorageComments = JSON.parse(
      window.localStorage.getItem(videoId)
    );
    if (storedLocalStorageComments !== null) {
      //   this.setState({ commentsList: [] });
      // } else {
      this.setState({ commentsList: storedLocalStorageComments });
    }
    window.addEventListener('storage', (event) => {
      console.log(event.key);
    });
  }
  render() {
    const { commentsList } = this.state;
    const { videoId } = this.props;
    return (
      <div>
        <CommentForm addComments={this.addComments} />
        <CommentFeed commentsList={commentsList} videoId={videoId} />
      </div>
    );
  }
}
export default CommentSection;