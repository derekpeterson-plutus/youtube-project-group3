import React from 'react';
import './App.css';

function App() {



fetchData = (inp)=> {
  fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=21&q=${inp}&type=video&key=${process.env.REACT_APP_API_KEY}`
  )
  .then((res) =>{
    this.setState({
      return res.json();
    })
    .then((data) => {
      this.setState({
        video: data.items,
      });
    })
  })
}

  return (
    <div className='App'>
      <title>YouTube App</title>
      <h1>YouTube</h1>
    </div>
  );
}

export default App;
