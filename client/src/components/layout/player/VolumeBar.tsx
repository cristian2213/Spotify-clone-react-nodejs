import { ChangeEvent } from 'react';

interface IPros {
  progressBar: number;
  onHandleProgress: (arg: number) => void;
}

function VolumeBar({ progressBar, onHandleProgress }: IPros) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onHandleProgress(+event.target.value);
  };

  const inlineStyles = {
    backgroundSize: `${progressBar}% 100%`,
  };

  return (
    <div className='flex items-center'>
      <input
        type='range'
        className='w-[93px]'
        value={progressBar}
        onChange={handleChange}
        min='0'
        max='100'
        style={inlineStyles}
      />
    </div>
  );
}

export default VolumeBar;
