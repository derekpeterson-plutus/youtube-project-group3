import React from 'react';
import './App.css';
import NavBar from './Components/NavBar.js';
import About from './Components/About.js';
//import Home from './Components/Home.js';
import SearchBar from './Components/SearchBar';
import { Routes, Route } from 'react-router-dom';

class App extends React.Component {
 constructor () { 
   super();
   this.state = {
     video: [],
     searchTerm: "",
   };
 } 
 handleChange = (e) => {
   this.setState({
     [e.target.name]: e.target.value,
   });

 }
 componentDidMount() {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=type=video&key=${process.env.REACT_APP_API_KEY}`
    )
        .then(response => response.json())
        .then(data => this.setState({ data }));
    }

//  fetchData = (inp)=> {
//    fetch(
//     `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${inp}&type=video&key=${process.env.REACT_APP_API_KEY}`
//   )
//   .then((res) =>{
//       return res.json();
//     })
//     .then((data) => {
//       //console.log(data);
//       this.setState({
//         videos: data.items,
//       });
//     })
   
// }

handleSubmit = (e) => {
  e.preventDefault();
  const {searchTerm} = this.state;
  if (searchTerm) {
    this.fetchData(searchTerm);
    this.setState({
      searchTerm: "",
    });
  }
}


  render() {
    return (
      <div className='App'>
        <title>YouTube App</title>
        
        <header className='App-header'>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <SearchBar
                   searchTerm={this.state.searchTerm}
                   handleChange={this.handleChange}
                   handleSubmit={this.handleSubmit}
                   videos={this.state.video}
                />
              }
             /> 
            <Route path='/about' element={<About />} />
            
            <Route
              path='*'
              element={
                <main style={{ padding: '1rem' }}>
                  <p>404 Page There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </header>
      </div>
    );
  }
}
export default App;
