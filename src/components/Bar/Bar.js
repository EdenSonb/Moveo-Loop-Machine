import React from 'react'

import './Bar.css';

const Bar = (props) => {
    return (
        <li className='bar-items'>
            <button className='bar-item' onClick={() => props.onPlaySounds()}>play</button>
            <button className='bar-item' onClick={() => props.onStopSounds()}>stop</button>
            <button className='bar-item' onClick={() => props.isLoop ? props.onUnLoopSounds() : props.onLoopSounds()}>{props.isLoop ? 'unloop' : 'loop'}</button>
        </li>
    )
}

export default Bar
