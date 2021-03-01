import React from 'react';
import './Player.css'
const Player = (props) => {
    const { id, name, image, salary, age, position, country } = props.player;
    const [firstName, secondName, thirdName] = name.split(" ");
    return (
        <div className="player" style={{ backgroundImage: `url(${image})` }}>
            <div className="player-image" >
            </div>
            <div className="details">
                <div className="player-name">
                    {firstName}<br></br>{secondName} {thirdName}
                </div>
                <div className="hr"></div>
                <div className="age-pos-country">
                    <div className="age-info">
                        <span className="upper">Age</span>
                        <span className="info-data">{age}</span>
                    </div>
                    <div className="position-info">
                        <span className="upper">Position</span>
                        <span className="info-data">{position}</span>
                    </div>
                    <div className="country-info">
                        <span className="upper">Country</span>
                        <span className="info-data">{country}</span>
                    </div>
                </div>
                <div className="salary-hire">
                    <span className="salary">
                        ${salary}
                    </span>
                    <button onClick={() => props.handleHire(props.player)} className="hire">Hire</button>
                </div>
            </div>
        </div>
    );
}
export default Player;