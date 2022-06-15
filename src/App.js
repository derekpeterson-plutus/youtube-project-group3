import React from 'react';
import './App.css';

class App extends React.Component {
 constructor () { 
   super();
   this.state = {
     video: [],
   };
 } 

 fetchData = (inp)=> {
   fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=21&q=${inp}&type=video&key=${process.env.REACT_APP_API_KEY}`
  )
  .then((res) =>{
      return res.json();
    })
    .then((data) => {
      console.log(data);
      this.setState({
        video: data.items,
      });
    })
   
}




    render (){
    
  return (

    <div className='App'>
      <title>YouTube App</title>
      <h1>YouTube</h1>
      {this.fetchData(" ") }
    </div>
  );
}
}
export default App;
