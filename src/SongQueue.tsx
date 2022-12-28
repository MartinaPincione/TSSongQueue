import { useState } from "react";
import { Card } from "react-bootstrap";
import './styles.css';




export function SongQueue() {

    const [songName, setSongName] = useState('');
    const [curSong, setCurSong] = useState("Nothing playing yet");
    const [songs, setSongs] = useState([]);
    
    let cur: string = "Nothing playing yet"
    
    function addSongs(song: string){
      setSongName('');
      setSongs([...songs, song]);
    }

    function removeSong(song: string){
      setSongName('');
      setSongs(songs => songs.filter(s => s !== song));
    }

    function nextSong(){
      if (songs){
        cur = songs[0]
        setSongs(s => s.filter((_, index)=>index !== 0))
        setCurSong(cur)
        return cur
      }
    }


    return(
    <>
    <h1 style={{textAlign: "center"}}>Please enter a song below:</h1>
    <input className="input_box" placeholder="song name" value={songName} onChange={e => setSongName(e.target.value)} style={{textAlign:"center"}}/>
    <div></div>
    <button className="button_add" onClick={() => addSongs(songName)}>Add Song</button>
    <button className="button_remove" onClick={() => removeSong(songName)}>Remove Song</button>
    <button className= "button_next" onClick={() => nextSong()}>Next Song</button>
    <div style={{textAlign: "center"}}>Songs in Queue</div>
    <ul className="ul">
      {songs.map(songs => 
        <li key={songs}>{songs}</li>)}
    </ul>
    <Card className="card">
        <Card.Body>
          <Card.Title>
            Account
            </Card.Title>
            <div className="cur-playing">Currently Playing: </div>
            {curSong}</Card.Body>
    </Card>
    </>
  )
}