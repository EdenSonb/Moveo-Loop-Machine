import { useEffect, useState, useRef } from 'react';
import './App.css';
import SoundsList from './components/SoundsList/SoundsList';
import Bar from './components/Bar/Bar';
import TrackingTime from './components/TrackingTime/TrackingTime';
import Sounds from './Sounds'
import tambourine from './LoopFiles/_tambourine_shake_higher.mp3'


const App = () => {
  
  const [playlist, setPlaylist] = useState(Sounds);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(0)
  
  let interval 
  const dummySound = useRef(new Audio(tambourine))
  const {duration} = dummySound.current
  const currPrecentage = duration ? `${(time / duration) * 100}%` : '0%'
  const trackingStyle = `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currPrecentage}, #fff),)`
  dummySound.current.volume = 0
  
  const onMuteHandler = (sound) => {
    const playing = playlist.filter(sound => !sound.mute)
    if (isPlaying) {
      stopSoundHandler(sound)
    }
    if (playing.length == 1){
      onStopSounds()
    }
    const newPlaylist = playlist.map(sound_ => sound_.color == sound.color ? Object.assign({},sound_, {mute:true}): sound_)
    setPlaylist(newPlaylist);
  }
  
  const onUnMuteHandler = (sound) => {
    if (isPlaying) {
      sound.audio.currentTime = dummySound.current.currentTime.toString()
      sound.audio.play()
    }
    const newPlaylist = playlist.map(sound_ => sound_.color == sound.color ? Object.assign({},sound_, {mute:false}): sound_)
    setPlaylist(newPlaylist)
  } 
  
  const onPlaySounds = () => {
    const playing = playlist.filter(sound => !sound.mute)

    if (playing.length != 0) {
      playlist.map(sound => !sound.mute ? sound.audio.play() : {})
      dummySound.current.play()
      setIsPlaying(true)
    } else {
      setIsPlaying(false)
    }
  } 

  const onStopSounds = () => {
    if (isPlaying) {
      playlist.map(sound => stopSoundHandler(sound))
      dummySound.current.pause()
      dummySound.current.currentTime = 0
    }
    setIsPlaying(false)
    setTime(0)
  }

  const stopSoundHandler = (sound) => {
    sound.audio.pause()
    sound.audio.currentTime = 0
  }

  const onLoopSounds = () => {
    playlist.map(sound => sound.audio.loop = true)
    dummySound.current.loop = true
    setIsLoop(true)
  }

  const onUnLoopSounds = () => {
    playlist.map(sound => sound.audio.loop = false)
    dummySound.current.loop = false
    setIsLoop(false)
  }

  const trackTime = () => {
    interval = setInterval(() => {
      const curTime = dummySound.current.currentTime
      setTime(curTime)
      if (dummySound.current.ended && !isLoop) {
        setIsPlaying(false)
        setTime(0)
      }
    }, (50));
    setIntervalId(interval)
  }

  useEffect(() => {
    if (isPlaying) {
      trackTime()   // starts the interval
    }
    else {
      clearInterval(intervalId)
      setIntervalId(0);  // kills the interval
    }
  }, [isPlaying])  //listening to changes in isPlaying - triggers every time there is a change in isplaying

  const onScrub = (value) => {
    setTime(value)
    playlist.map(sound => sound.mute ? {} : (sound.audio.currentTime = value)) 
    dummySound.current.currentTime = value
  }
  
  return (
    <div className="App">
      <h1 className="App-header">Loop Machine</h1>
      <TrackingTime duration={duration} time={time} trackingStyle={trackingStyle} onScrub={onScrub}/>
      <SoundsList sounds={playlist} onMuteHandler={onMuteHandler} onUnMuteHandler={onUnMuteHandler}/>
      <Bar onPlaySounds={onPlaySounds} onStopSounds={onStopSounds} 
            isLoop={isLoop} onLoopSounds={onLoopSounds} onUnLoopSounds={onUnLoopSounds}></Bar>
    </div>
  );
}
export default App;
