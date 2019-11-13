import React from 'react';
import './match-score.css';

const MatchScore = (props) => {
    return (
        <div className="score-div">

            <p>{props.score}</p>
            
        </div>
    );
};

export default MatchScore;