import { GoPlay } from 'react-icons/go';
import { BsFillSkipStartFill, BsFillSkipEndFill } from 'react-icons/bs';
import { FaRandom } from 'react-icons/fa';
import { TiArrowRepeat } from 'react-icons/ti';

interface IProps {
  readonly isPlaying: boolean;
  readonly onPlayPauseClick: (arg: boolean) => void;
  readonly onPrevClick: () => void;
  readonly onNextClick: () => void;
}

function AudioControls({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}: IProps) {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className='audio-controls text-black flex flex-row items-center gap-4'>
        <FaRandom
          className='text-[#b3b3b3] hover:text-white transition-all'
          size={20}
        />

        <BsFillSkipStartFill
          className='text-[#b3b3b3] hover:text-white transition-all'
          size={26}
          onClick={onPrevClick}
        />
        {isPlaying ? (
          <button
            type='button'
            className='pause text-white'
            onClick={() => onPlayPauseClick(false)}
            aria-label='Pause'
          >
            Pause
          </button>
        ) : (
          <GoPlay
            className='text-white'
            size={38}
            onClick={() => onPlayPauseClick(true)}
          >
            Play
          </GoPlay>
        )}
        <BsFillSkipEndFill
          className='text-[#b3b3b3] hover:text-white transition-all'
          size={26}
          onClick={onNextClick}
        />
        <TiArrowRepeat
          className='text-[#b3b3b3] hover:text-white transition-all'
          size={27}
        />
      </div>
      <TrackProgress />
    </div>
  );
}

function TrackProgress() {
  return (
    <div className='w-1/2'>
      <input
        type='range'
        className='w-full h-1 bg-[#b3b3b3]  appearance-none rounded custom-thumb'
      />
    </div>
  );
}

export default AudioControls;
