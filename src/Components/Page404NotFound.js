import { Link } from 'react-router-dom';
import { React, Component } from 'react';
import './Page404NotFound.css';

class Page404NotFound extends Component {
  render() {
    return (
      <div className='notFound'>
        <h1 style={{ color: 'red', fontSize: 100 }}>404</h1>
        <h3>Sorry ,We could not find the Page</h3>
        <p className='home' style={{ fontSize: 40 }}>
          <Link to='/'>Go Home</Link>
        </p>
      </div>
    );
  }
}
export default Page404NotFound;
