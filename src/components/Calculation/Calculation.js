import React from 'react';
import './Calculation.css'
const Calculation = (props) => {
    const players = props.players;
    const totalBudget = players.reduce((total, player) => total + player.salary, 0);
    return (
        <div class="calculate-container">
            <div className="added-players">
                {
                    players.map(player =>
                        <div key= {player.id} className="single-player">
                            <span>{player.name}</span>
                            <span className="single-salary">${player.salary}</span>
                        </div>
                    )
                }
            </div>
            <div className="calculate">
                <div className="nofPlayers-container">
                    <span className="nofPlayers">
                        {players.length}</span>
                    <span className="nofPlayers-text">Players added</span>
                </div>
                <div className="totalBudget">
                    ${totalBudget}
                </div>
            </div>
        </div>
    );
};

export default Calculation;