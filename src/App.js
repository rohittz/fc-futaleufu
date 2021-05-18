import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import React, { Component, useState, useEffect } from 'react';
import Player from './components/Player/Player';
import Fakedata from './Fakedata/Fakedata.json';
import Navbar from './components/Navbar/Navbar'
import Calculation from './components/Calculation/Calculation'
import './App.css';
function App() {
  document.body.style = "background-color: #333945";
  let [players, setPlayers] = useState([]);
  // to handle duplicate players
  let [keys, setkeys] = useState([]);
  const handleHire = (player) => {
    if (keys.includes(player.id) === false) {
      keys = [...keys, player.id];
      players = [...players, player];
      setPlayers(players);
      setkeys(keys);
    }
  }
  return (
    <div className="App">
      <Navbar></Navbar>
      <Calculation players={players}></Calculation>
      <div className="players-container">
        <div className="players-list">
          {
            Fakedata.map(player => <Player handleHire={handleHire} key={player.id} player={player} />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
