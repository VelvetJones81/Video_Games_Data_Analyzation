import React, {useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar/SearchBar';
import DisplayPlatformStats from './Components/Charts/DisplayPlatformStats'

function App() {

  const [videoGames, setVideoGames] = useState([]);

useEffect(() => {
  getVideoGames();
}, []);
console.log(videoGames)
async function getVideoGames() {
  try{
    const response = await axios.get("https://localhost:7260/api/games");
    setVideoGames(response.data);
  }
  catch(ex){
    console.log(`ERROR in getVideoGames EXCPETION: ${ex}`)
  }
}

  return (
    <div className="App">
      <DisplayPlatformStats videoGames={videoGames}/>
      <SearchBar videoGames={videoGames}/>
    <h1>Video Games!</h1>
    <p>I'm pretty awesome, just so you know</p>

    </div>
  );
}

export default App;
