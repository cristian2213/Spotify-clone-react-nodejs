import { useState, useEffect, useContext } from 'react';
import PlayerAlbum from './PlayerAlbum';
import AudioControls from './AudioControls ';
import AudioOptions from './AudioOptions';
import { SongContext } from '../../../context/songs/SongContext';

function Player() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [isLoaded, setIsloaded] = useState(false);

  const { currentSongs: tracks } = useContext(SongContext);
  const { title, artist, color, image, audioSrc } = tracks[trackIndex];
  const [audio, setAudioSrc] = useState(new Audio(audioSrc));

  useEffect(() => {
    if (!isLoaded) {
      audio.addEventListener('canplay', handleAudioEvents);
      audio.addEventListener('timeupdate', handleAudioEvents);
      audio.addEventListener('ended', handleAudioEvents);
      setIsloaded(true);
    }

    if (isPlaying) audio.play();
    else audio.pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, audio, isLoaded]);

  useEffect(() => {
    toNextTrack();
    if (!isLoaded) setIsPlaying(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tracks, setIsPlaying]);

  const handleAudioEvents = (event: any) => {
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
    }
  };

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
      setTrackIndex(index);
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
      setTrackIndex(index);
    }
    ResetState();
    setAudioSrc(new Audio(tracks[index].audioSrc));
  };

  const handleVolume = (volume: number) => (audio.volume = volume / 100);
  const handlePointer = (newPointer: number) =>
    (audio.currentTime = newPointer);

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
