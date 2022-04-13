// import { ChangeEvent } from 'react';
import React, { ChangeEvent } from 'react';

interface IPros {
  readonly audioDuration: number;
  readonly audioCurrentTime: number;
  readonly onPointer: (arg: number) => void;
}

function ProgressBar({ audioDuration, audioCurrentTime, onPointer }: IPros) {
  const maxTime = audioDuration;
  const currentTimeInRaw = audioCurrentTime.toFixed(2);
  const currentTime = ((+currentTimeInRaw * 100) / maxTime).toFixed(2);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const newPointer = +event.target.value;
    onPointer(newPointer);
  };

  const inlineStyles = {
    backgroundSize: `${currentTime}% 100%`,
  };

  return (
    <div className='w-1/2'>
      <input
        type='range'
        className='w-full'
        value={currentTimeInRaw}
        onChange={(e) => handleChange(e)}
        min='0'
        max={maxTime}
        style={inlineStyles}
      />
    </div>
  );
}

export default ProgressBar;
