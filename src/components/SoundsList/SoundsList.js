import React from 'react'
import SoundItem from '../SoundItem/SoundItem';

import './SoundsList.css';

const SoundsList = (props) => {
    return (
        <ul className='sounds-list'>
            {props.sounds.map(sound => (
                <SoundItem 
                    key={sound.color} 
                    sound = {sound}
                    onMuteHandler = {props.onMuteHandler}
                    onUnMuteHandler = {props.onUnMuteHandler}/>
            ))}
        </ul>
    )
}

export default SoundsList