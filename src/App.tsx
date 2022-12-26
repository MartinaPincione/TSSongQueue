import { useState } from "react";
import './styles.css';



function App() {

    const [songName, setSongName] = useState('');
    const [songs, setSongs] = useState([]);
    
    function addSongs(song: string){
      setSongName('');
      setSongs([...songs, song]);
      console.log("Added song " + song);
    }

    function removeSong(song: string){
      setSongName('');
      setSongs(songs => songs.filter(s => s !== song));
    }


    return(
    <>
    <h1 style={{textAlign: "center"}}>Please enter a song below:</h1>
    <input className="input_box" placeholder="song name" value={songName} onChange={e => setSongName(e.target.value)} style={{textAlign:"center"}}/>
    <div></div>
    <button className="button_add" onClick={() => addSongs(songName)}>Add Song</button>
    <button className="button_remove" onClick={() => removeSong(songName)}>Remove Song</button>
    <div style={{textAlign: "center"}}>Songs in Queue</div>
    <ul className="ul">
      {songs.map(songs => 
        <li key={songs}>{songs}</li>)}
    </ul>
    </>
  )
}

export default App
