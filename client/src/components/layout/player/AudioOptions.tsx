import { useState } from 'react';
import Volumes from './AudioControlVolume';

function ProgressBar() {
  const [barValue, setBarValue] = useState(100);

  return (
    <div>
      <input
        type='range'
        className='w-[93px] h-1 bg-black'
        defaultValue={barValue}
      />
    </div>
  );
}

function AudioOptions() {
  const progressBar = {
    width: '42.00%',
  };

  return (
    <div className='min-w-[200px] text-right'>
      <div className='flex items-center gap-2'>
        <Volumes type='mute' />
        <Volumes type='low' />
        <Volumes type='medium' />
        <Volumes />
        <ProgressBar />
      </div>
    </div>
  );
}

export default AudioOptions;
