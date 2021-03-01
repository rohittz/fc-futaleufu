import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import React, { Component, useState, useEffect } from 'react';
import Player from './components/Player/Player';
import Fakedata from './Fakedata/Fakedata.json';
import Navbar from './components/Navbar/Navbar'
import './App.css';
function App() {
  document.body.style = "background-color: #333945";
  const [players, setPlayers] = useState([]);
  const handleHire = (player) => {
    setPlayers([...players, player]);
    console.log(players);
  }
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="players-list">
        {
          Fakedata.map(player => <Player handleHire = {handleHire} key={player.id} player={player} />)
        }
      </div>
    </div>
  );
}

export default App;
