import React from 'react'

import './SoundItem.css';

const SoundItem = (props) => {
    return (
        <li className='sound-item' id={props.sound.name}>
            <div className='item-name'>{props.sound.name}</div>
            <button className='mute-button' 
                onClick={() => props.sound.mute ? props.onUnMuteHandler(props.sound) : props.onMuteHandler(props.sound)}>
                {props.sound.mute ? 'unmute' : 'mute'}</button>
            <button className={props.sound.color} id='color'></button>
        </li>
    )
}

export default SoundItem
