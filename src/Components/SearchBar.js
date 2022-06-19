import { React, Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    const { searchInput, handleChange, handleSubmit } = this.props;
    return (
      <div className='container'>
        <form onSubmit={(event) => handleSubmit(event)}>
          <label>
            <div className='wrapper'>
              <input
                type='text'
                id='searchbar'
                placeholder='Search here'
                style={{
                  maxWidth: '90rem',
                  width: '100%',
                }}
                size='50'
                name='searchbar'
                value={searchInput}
                onChange={handleChange}
              />
              <button>Search</button>
            </div>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
