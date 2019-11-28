import './live-score.css';
import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Match from './Match.jsx';

import flag1 from './../images/flag-1.png';
import flag2 from './../images/flag-2.png';
import { thisExpression } from '@babel/types';


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


class LiveScore extends Component {
    constructor(props) {
        super(props);

        this.state = {
            matches: [],
        }

    }


    componentDidMount() {
        axios.get(`https://cricapi.com/api/cricket?apikey=qM4nJ31Wu9fmjHfNo0ki9OUVStI3`)
            .then(res => {
                
                // console.log(res.data)

                let matchesList = [];

                for (let i = 0; i < res.data.data.length; i++) {

                    let uniqueId = res.data.data[i].unique_id;

                    axios.get("https://cricapi.com/api/cricketScore?apikey=qM4nJ31Wu9fmjHfNo0ki9OUVStI3&unique_id=" + uniqueId)
                        // eslint-disable-next-line no-loop-func
                        .then(response => {

                            matchesList.push(response.data);

                            console.log(response.data);

                        })

                }

                this.setState({ matches: matchesList });

                console.log(typeof this.state.matches)

            })
    }


    render() {

        

        return (
            <div>

                <div className="matches-list">

                    {
                        this.state.matches.map(match =>
                            <Match

                                isLive={match.matchStarted === true ? "Live" : "Coming Soon"}
                                date="Today"

                                team1Flag={flag1}
                                team1={match["team-1"]}
                                scoreTeam1="249/7"
                                team1Overs="(50)"

                                team2Flag={flag2}
                                team2={match["team-2"]}
                                scoreTeam2={match.score}
                                team2Overs="(48.4)"

                                description={match.description}
                                status="ODI 3 of 3 (Wi wins 3-0)"

                            />
                        )
                    }

                    {
                        this.state.matches.map( check =>
                            <div>{"Hello" + 1 + 1}</div>
                        )
                    }

                </div>
            </div>
        );
    }
}

LiveScore.propTypes = {

};

export default LiveScore;