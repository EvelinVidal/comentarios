import './App.css';
import axios from "axios"; 
import { useEffect } from 'react';
function App() {
  useEffect(() =>{ 
    axios.get("") // ruta de nuestra api, que esta unicada en localhost:3001/posts
}, [])
  return 
    <div className="App"> </div>
  0
}

export default App;
