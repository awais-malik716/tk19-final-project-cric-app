import React from 'react';
import './SiteInfo.css';

const SiteInfo = (props) => {
    return (
        <div className="first-heading">
            <h2>{props.heading}</h2>
            <p>{props.para}</p>
        </div>
    );
};

export default SiteInfo;