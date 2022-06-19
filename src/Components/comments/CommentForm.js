import { React, Component } from 'react';
class CommentForm extends Component {
  constructor() {
    super();
    this.state = {
      commentorName: '',
      userComments: '',
    };
  }
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };
  handleComments = (event) => {
    event.preventDefault();
    const { addComments } = this.props;
    const { commentorName, userComments } = this.state;
    addComments(commentorName, userComments);
    this.setState({ commentorName: '', userComments: '' });
  };
  render() {
    return (
      <div>
        <form className='comment' onSubmit={this.handleComments}>
          <div>
            <label htmlFor='commentorName'>Commentors Name</label>
            <input
              id='commentorName'
              name='commentorName'
              type='text'
              value={this.state.commentorName}
              onChange={this.handleChange}
              required
            />
            {/* <UserIcon image={process.env.REACT}/> */}
          </div>
          <div>
            <label htmlFor='userComments'>Comments </label>
            <input
              id='userComments'
              name='userComments'
              type='text'
              value={this.state.userComments}
              onChange={this.handleChange}
              required
            />
          </div>
          <button>Add a Comment</button>
        </form>
      </div>
    );
  }
}
export default CommentForm;
