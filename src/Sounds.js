import tambourine from './LoopFiles/_tambourine_shake_higher.mp3'
import allTrack from './LoopFiles/ALL TRACK.mp3'
import bvoc from './LoopFiles/B VOC.mp3'
import drums from './LoopFiles/DRUMS.mp3'
import heheVoc from './LoopFiles/HE HE VOC.mp3'
import highVoc from './LoopFiles/HIGH VOC.mp3'
import jibrish from './LoopFiles/JIBRISH.mp3'
import lead1 from './LoopFiles/LEAD 1.mp3'
import uuhoVoc from './LoopFiles/UUHO VOC.mp3'


// Initiailize the sounds objects
const Sounds = [
  {
    name : 'TAMBOURINE',
    color : 'red',
    mute : false,
    audio : new Audio(tambourine)
  },
  {
    name : 'ALL TRACK',
    color : 'orange',
    mute : false,
    audio : new Audio(allTrack)
  },
  {
    name : 'B VOC',
    color : 'yellow',
    mute : false,
    audio : new Audio(bvoc)
  },
  {
    name : 'DRUMS',
    color : 'green',
    mute : false,
    audio : new Audio(drums)
  },
  { 
    name : 'HE HE VOC',
    color : 'blue',
    mute : false,
    audio : new Audio(heheVoc)
  },
  { 
    name : 'HIGH VOC',
    color : 'purple',
    mute : false,
    audio : new Audio(highVoc)
  },
  { 
    name : 'JIBRISH',
    color : 'fuchsia',
    mute : false,
    audio : new Audio(jibrish)
  },
  { 
    name : 'LEAD 1',
    color : 'pink',
    mute : false,
    audio : new Audio(lead1)
  },
  { 
    name : 'UUHO VOC',
    color : 'grey',
    mute : false,
    audio : new Audio(uuhoVoc)
  } 
]

export default Sounds