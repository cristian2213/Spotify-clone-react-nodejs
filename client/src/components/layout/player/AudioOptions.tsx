import { useState } from 'react';
import Volumes from './Volumes';
import VolumeBar from './VolumeBar';

interface IPros {
  onVolume: (arg: number) => void;
}

function AudioOptions({ onVolume }: IPros) {
  const [isMute, setIsMute] = useState(false);
  const [oldProgressBar, setOldProgressBar] = useState(0);
  const [progressBar, setProgressBar] = useState(100);
  const low = 33;
  const medium = 66;

  const handleChange = (newProgress: number) => {
    setProgressBar(newProgress);
    onVolume(newProgress);
  };

  const handleMute = () => {
    setIsMute((preVal) => {
      const mute = !preVal;
      if (mute) {
        setOldProgressBar(progressBar);
        setProgressBar(0);
        onVolume(0);
      } else {
        setProgressBar(oldProgressBar);
        onVolume(oldProgressBar);
        setOldProgressBar(0);
      }
      return mute;
    });
  };

  const VolumeIcon = () => {
    switch (true) {
      case isMute || progressBar === 0:
        return <Volumes type='mute' onMute={handleMute} />;
      case progressBar <= low:
        return <Volumes type='low' onMute={handleMute} />;
      case progressBar > low && progressBar <= medium:
        return <Volumes type='medium' onMute={handleMute} />;
      default:
        return <Volumes onMute={handleMute} />;
    }
  };

  return (
    <div className='min-w-[200px] text-right ml-auto'>
      <div className='flex items-center gap-2 justify-end'>
        {VolumeIcon()}
        <VolumeBar progressBar={progressBar} onHandleProgress={handleChange} />
      </div>
    </div>
  );
}

export default AudioOptions;
