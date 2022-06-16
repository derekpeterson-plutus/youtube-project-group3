import { React, Component } from 'react';
//import axios from "axios";
// import { Link} from "react-router-dom";
import './SearchBar.css';
import VideoList from './VideoList.js';

class SearchBar extends Component {

 
  render() {
    const { isError, videos, handleSubmit, handleChange ,searchTerm,} = this.props;
    
    if (isError) {
      return (
        <div style={{ color: 'red', fontSize: 100 }}>No Results found!</div>
      );
    }
    return (
      <div className='container'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            <div className='wrapper'>
              <input
                type='text'
                id='searchbar'
                placeholder='Search here'
                name='searchTerm'
                size='90'
                onChange={handleChange}
                value={searchTerm}
              />
              <button
               className='buttons' type='submit'
              >
                Search
              </button>
            </div>
          </label>
        </form>
        <VideoList videos={videos}/>
      </div>
    );
  }
}

export default SearchBar;


