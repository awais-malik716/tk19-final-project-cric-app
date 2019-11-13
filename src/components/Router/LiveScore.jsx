import React from 'react';
import './live-score.css';
import Match from './Match.jsx';

import flag1 from './../images/flag-1.png';
import flag2 from './../images/flag-2.png';

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const LiveScore = () => {

    let matchesList;

    const axios = require('axios');

    // Make a request for a user with a given ID
    axios.get('https://cricapi.com/api/cricket?apikey=qM4nJ31Wu9fmjHfNo0ki9OUVStI3')
        .then(function (response) {
            // handle success

            // for (let i = 0; i < response.data.data.length; i++) {
            //     console.log(response.data.data[i]);
            // }

            matchesList = response.data.data;
            console.log(matchesList);

            document.querySelector(".matches-list").innerHTML += matchesList.map(match =>
                <Match

                    isLive="Live"
                    date="Today"

                    team1Flag={flag1}
                    team1="West Indies"
                    scoreTeam1="249/7"
                    team1Overs="(50)"

                    team2Flag={flag2}
                    team2="Afghanistan"
                    scoreTeam2="253/5"
                    team2Overs="(48.4)"

                    description="WI win by 5 wickets (8 balls left)"
                    status="ODI 3 of 3 (Wi wins 3-0)"

                />);


        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });


    return (
        <div>

            <div className="matches-list">

                {
                    // arr.map(match =>
                    //     <Match

                    //         isLive="Live"
                    //         date="Today"

                    //         team1Flag={flag1}
                    //         team1="West Indies"
                    //         scoreTeam1="249/7"
                    //         team1Overs="(50)"

                    //         team2Flag={flag2}
                    //         team2="Afghanistan"
                    //         scoreTeam2="253/5"
                    //         team2Overs="(48.4)"

                    //         description="WI win by 5 wickets (8 balls left)"
                    //         status="ODI 3 of 3 (Wi wins 3-0)"

                    //     />
                    // )
                }

            </div>

        </div>
    );
};

export default LiveScore;