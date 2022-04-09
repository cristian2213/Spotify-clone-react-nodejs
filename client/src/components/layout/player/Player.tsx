import { useState, useEffect, useCallback } from 'react';
import PlayerAlbum from './PlayerAlbum';
import AudioControls from './AudioControls ';
import AudioOptions from './AudioOptions';

const tracks = [
  {
    title: 'Sticky Fingers',
    artist: 'Lekkerboy',
    audioSrc: './assets/piano1.mp3',
    image: './assets/metal.jpg',
    color: '#000',
  },
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
    image: './assets/metal2.jpg',
    color: '#000',
  },
];

/* 
Bugs:
- Stop song and play another
- Volume
*/

function Player() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [isLoaded, setIsloaded] = useState(false);

  const { title, artist, color, image, audioSrc } = tracks[trackIndex];
  const [audio, setAudioSrc] = useState(new Audio(audioSrc));

  const handleAudioEvents = useCallback(
    (event: any) => {
      const { type } = event;
      switch (true) {
        case type === 'canplay':
          setAudioDuration(event.path[0].duration);
          break;

        case type === 'timeupdate':
          const currentTime = event.path[0].currentTime;
          setCurrentTime(currentTime);
          break;

        case type === 'ended':
          setIsloaded(false);
          audio.pause();
          break;

        default:
          break;
      }
    },
    [audio]
  );

  useEffect(() => {
    if (!isLoaded) {
      audio.addEventListener('canplay', handleAudioEvents);
      audio.addEventListener('timeupdate', handleAudioEvents);
      audio.addEventListener('ended', handleAudioEvents);
      setIsloaded(true);
    }

    if (isPlaying) {
      audio.play();
    } else audio.pause();
  }, [isPlaying, audio, isLoaded, handleAudioEvents]);

  const ResetState = () => {
    audio.pause();
    setAudioDuration(0);
    setCurrentTime(0);
    setIsPlaying(true);
    setIsloaded(false);
  };

  const toPrevTrack = () => {
    let index;
    if (trackIndex - 1 < 0) {
      index = tracks.length - 1;
      setTrackIndex(index); //  last track
    } else {
      index = trackIndex - 1;
      setTrackIndex(index);
    }
    ResetState();
    setAudioSrc(new Audio(tracks[index].audioSrc));
  };

  const toNextTrack = () => {
    let index;
    if (trackIndex < tracks.length - 1) {
      index = trackIndex + 1;
      setTrackIndex(index);
    } else {
      index = 0;
      setTrackIndex(index); // first track
    }
    ResetState();
    setAudioSrc(new Audio(tracks[index].audioSrc));
  };

  const handleVolume = (volume: number) => {
    audio.volume = volume / 100;
  };

  const handlePointer = (newPointer: number) => {
    audio.currentTime = newPointer;
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
        handlePointer={handlePointer}
      />
      <AudioOptions onVolume={handleVolume} />
    </div>
  );
}

export default Player;
