import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.css';

import SearchBar from './SearchBar.js';
import { decode } from 'html-entities';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchedVideos: [],
      searchInput: '',
    };
  }

  fetchData = (input) => {
    fetch(
      `https:youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${input}&key=${process.env.REACT_APP_API_KEY}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          searchedVideos: [...data.items],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ searchInput: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('searchInput', this.state.searchInput);
    if (this.state.searchInput) {
      this.fetchData(this.state.searchInput);
      this.setState({ searchInput: '' });
    }
  };

  render() {
    const { searchedVideos } = this.state;
    let results = searchedVideos.map((video) => {
      return (
        <div>
          <Link to={`/videos/${video.id.videoId}`} key={video.id.videoId}>
            <h4>Title: {decode(video.snippet.title)}</h4>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={decode(video.snippet.title)}
            />
          </Link>
          <h4>Description: {decode(video.snippet.description)}</h4>
          <div>
            <h4>RegionCode: {video.snippet.regionCode}</h4>
            <h4>
              Uploaded on:{' '}
              {video.snippet.publishTime
                ? video.snippet.publishTime.slice(0, 10)
                : null}
            </h4>
          </div>
        </div>
      );
    });
    return (
      <div className='container'>
        <SearchBar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          searchInput={this.state.searchInput}
        />
        {!searchedVideos.length ? (
          <h4
            style={{
              color: 'white',
              fontSize: 20,
              textAlign: 'center',
              background: 'grey',
              width: '40rem',
              padding: '1rem',
              margin: '0 auto',
            }}
          >
            No Search Results Yet! Please submit a search above
          </h4>
        ) : (
          ''
        )}
        {results}
        {/* <VideoList searchedVideos={searchedVideos} /> */}
      </div>
    );
  }
}
export default Home;
