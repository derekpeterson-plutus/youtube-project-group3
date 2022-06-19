import { React, Component } from 'react';
class CommentFeed extends Component {
  render() {
    const commentedMessage = this.props.commentsList.map((comment, index) => {
      return (
        <div key={index}>
          <h4>Name: {comment.commentorName}</h4>
          <p>Comments: {comment.userComments}</p>
        </div>
      );
    });
    return <section>{commentedMessage}</section>;
  }
}
export default CommentFeed;
