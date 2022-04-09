interface IPros {
  readonly audioDuration: any;
  readonly audioCurrentTime: any;
}

function ProgressBar({ audioDuration, audioCurrentTime }: IPros) {
  const maxTime = +audioDuration.toFixed(3);
  const currentTimeInRaw = +audioCurrentTime.toFixed(3);
  const currentTime = (currentTimeInRaw * 100) / maxTime;

  const inlineStyles = {
    backgroundSize: `${currentTime}% 100%`,
  };

  const handleChange = (event: any) => {
    console.log(event.target.defaultValue);
  };

  return (
    <div className='w-1/2'>
      <input
        type='range'
        className='w-full'
        min='0'
        max={maxTime}
        value={currentTimeInRaw}
        style={inlineStyles}
        onChange={handleChange}
      />
    </div>
  );
}

export default ProgressBar;
