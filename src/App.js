import './App.css'; 
import Axios from 'axios'; 
import { useState } from 'react'; 
  
function App() { 
    const [artist, setArtist] = useState(""); 
    const [song, setSong] = useState(""); 
    const [language, setLanguage] = useState('english'); 
    const [lyrics, setLyrics] = useState(""); 
  
    function searchLyrics() { 
        if (artist === "" || song === "") { 
            return; 
        } 
        Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`).then(res => { 
            console.log(res.data.lyrics); 
            setLyrics(res.data.lyrics); 
        }) 
    } 
    return ( 
      <div className="App"> 
          <h1>Welcome to Lyrics-Finder!</h1> 
  
          <div className="input-group">
              <label htmlFor="artist" className="label">Artist name:</label>
              <input 
                  id="artist" 
                  className="inp" 
                  type="text" 
                  placeholder="Enter artist's name"
                  onChange={(e) => { setArtist(e.target.value) }} 
              />
          </div>
  
          <div className="input-group">
              <label htmlFor="song" className="label">Song name:</label>
              <input 
                  id="song" 
                  className="inp" 
                  type="text" 
                  placeholder="Enter song's name"
                  onChange={(e) => { setSong(e.target.value) }} 
              />
          </div>
  
          <div className="input-group">
              <label htmlFor="language" className="label">Select Language:</label>
              <select 
                  id="language" 
                  className="inp" 
                  onChange={(e) => { setLanguage(e.target.value) }}
              >
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
              </select>
          </div>
  
          <button 
              className="btn" 
              onClick={() => searchLyrics()}
          > 
              Search
          </button> 
  
          <hr /> 
          <pre>{lyrics}</pre> 
      </div> 
  ); 
  
  
} 
  
export default App;