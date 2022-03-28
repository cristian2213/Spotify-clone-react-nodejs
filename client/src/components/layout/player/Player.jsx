import { useState, useEffect, useRef } from 'react';
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
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  //   const [isLoading, setIsLoading] = useState(true);

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
      audioSrc: './assets/song2.mp3',
      image: './assets/metal.jpg',
      color: '#000',
    },
  ];
  const { title, artist, color, image, audioSrc } = tracks[trackIndex];
  const [audio, setAudioSrc] = useState(new Audio(audioSrc));
  audio.setAttribute('autoplay', '');

  // PLAY AND PAUSE
  useEffect(() => {
    if (audio.readyState >= 2) {
      if (isPlaying) {
        audio.play();
      } else audio.pause();
    }
  }, [isPlaying, audio]);

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
    <div className='h-[90px] bg-gray-800 flex flex-row justify-between items-center px-4'>
      <PlayerAlbum title={title} artist={artist} image={image} />
      <AudioControls
        isPlaying={isPlaying}
        onPrevClick={toPrevTrack}
        onNextClick={toNextTrack}
        onPlayPauseClick={setIsPlaying}
      />
      <AudioOptions />
    </div>
  );
}

export default Player;
