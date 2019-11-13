import React from 'react';
import './Service.css';

const Service = (props) => {
    return (
            <div class="service">
                <figure>
                    <div class="icon-style">
                        <img src={[props.iconImage]} />
                    </div>
                    <figcaption>
                        <a href="#">{props.heading}</a>
                    </figcaption>
                </figure>
                <div id="cricket-news-image" class="caption-image">
                    <div>
                        <img src={props.image} />
                    </div>
                    <figcaption>
                        {props.para}
                    </figcaption>
                </div>
            </div>
    );
};

export default Service;