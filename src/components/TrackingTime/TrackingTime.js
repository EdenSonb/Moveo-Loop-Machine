import React from 'react'

import './TrackingTime.css';

const TrackingTime = (props) => {
    return (
        <div className="prog-list">
            <div className="prog-item">
                <div className="prog-t"></div>
                <button className="prog-b" disabled></button>
                <input
                    type="range"
                    value={props.time}
                    step="0.1"
                    min="0"
                    max={props.duration ? props.duration : `${props.duration}`}
                    className="progress"
                    onChange={(e) => props.onScrub(e.target.value)}
                    style={{ background: props.trackingStyle }}>
                </input> 
            </div>
        </div>
    )
}

export default TrackingTime
