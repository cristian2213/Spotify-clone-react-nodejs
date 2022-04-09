import { useState, useEffect } from 'react';
import PlayerAlbum from './PlayerAlbum';
import AudioControls from './AudioControls ';
import AudioOptions from './AudioOptions';

// ./assets/song1.mp3
//   audioElement.setAttribute('autoplay', '');
// audioElement.setAttribute('controls', '');
// audioRef.current.audioElement.play();
// console.log(audioElement.currentTime);
// console.log(audioElement.ended);
// console.log(audioElement.duration);
function Player() {
  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [isLoaded, setIsloaded] = useState(false);

  const tracks = [
    {
      title: 'Sticky Fingers',
      artist: 'Lekkerboy',
      audioSrc: './assets/song1.mp3',
      image: './assets/metal.jpg',
      color: '#000',
    },

    {
      title: 'Saves The Day #2',
      artist: 'Lekkerboy',
      audioSrc: './assets/song122.mp3',
      image: './assets/metal2.jpg',
      color: '#000',
    },
  ];
  const { title, artist, color, image, audioSrc } = tracks[trackIndex];
  const [audio, setAudioSrc] = useState(new Audio(audioSrc));
  // audio.setAttribute('autoplay', '');

  const handleAudioEvents = (event: any) => {
    const { type } = event;
    switch (true) {
      case type === 'canplay':
        console.log(event.path[0].duration);
        setAudioDuration(event.path[0].duration);
        break;

      case type === 'timeupdate':
        const currentTime = event.path[0].currentTime;
        setCurrentTime(currentTime);
        break;

      case type === 'ended':
        setIsloaded(false);
        break;

      default:
        break;
    }
  };

  // PLAY AND PAUSE
  useEffect(() => {
    if (!isLoaded) {
      audio.addEventListener('canplay', handleAudioEvents);
      audio.addEventListener('timeupdate', handleAudioEvents);
      audio.addEventListener('ended', handleAudioEvents);
      setIsloaded(true);
    }

    if (audio.readyState >= 2) {
      if (isPlaying) {
        audio.play();
      } else audio.pause();
    }

    return () => {
      // audio.removeEventListener('canplay', handleAudioEvents);
      // audio.removeEventListener('timeupdate', handleAudioEvents);
      // audio.removeEventListener('ended', handleAudioEvents);
    };
  }, [isPlaying, audio, isLoaded]);

  // Handlers
  const toPrevTrack = () => {
    let index;
    if (trackIndex - 1 < 0) {
      index = tracks.length - 1;
      setTrackIndex(index); // LAST TRACK
    } else {
      index = trackIndex - 1;
      setTrackIndex(index);
    }
    audio.pause();
    setAudioSrc(new Audio(tracks[index].audioSrc));
  };

  const toNextTrack = () => {
    let index;
    if (trackIndex < tracks.length - 1) {
      index = trackIndex + 1;
      setTrackIndex(index);
    } else {
      index = 0;
      setTrackIndex(index); // FIRST TRACK
    }
    audio.pause();
    setAudioSrc(new Audio(tracks[index].audioSrc));
  };

  return (
    <div className='h-[90px] bg-[#181818] flex flex-row justify-between items-center px-4'>
      <PlayerAlbum title={title} artist={artist} image={image} color={color} />
      <AudioControls
        isPlaying={isPlaying}
        onPrevClick={toPrevTrack}
        onNextClick={toNextTrack}
        onPlayPauseClick={setIsPlaying}
        audioDuration={audioDuration}
        audioCurrentTime={currentTime}
      />
      <AudioOptions />
    </div>
  );
}

export default Player;
