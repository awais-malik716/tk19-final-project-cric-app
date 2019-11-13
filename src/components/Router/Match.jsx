import React from 'react';
import './match.css';


const Match = (props) => {
    return (
        <div className="match">

            <div className="match-info">

                <p>{props.isLive}</p>

                <p>{props.date}</p>

            </div>


            <div className="teams-parent">

                <div className="teams">

                    <div className="teams-flag">
                        <img src={props.team1Flag} />
                        <p>{props.team1}</p>
                    </div>

                    <div className="teams-score">
                        <p>{props.scoreTeam1}</p>
                        <span>{props.team1Overs}</span>
                    </div>

                </div>


                <div className="teams team2">

                    <div className="teams-score">
                        <p>{props.scoreTeam2}</p>
                        <span>{props.team2Overs}</span>
                    </div>

                    <div className="teams-flag">
                        <img src={props.team2Flag} />
                        <p>{props.team2}</p>
                    </div>

                </div>

            </div>

            <div className="match-description">

                <p>{props.description}</p>

                <span>{props.status}</span>

            </div>

        </div>
    );
};

export default Match;