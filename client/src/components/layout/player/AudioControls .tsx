import { GoPlay } from 'react-icons/go';
import {
  BsFillSkipStartFill,
  BsFillSkipEndFill,
  BsFillPauseCircleFill,
} from 'react-icons/bs';
import { FaRandom } from 'react-icons/fa';
import { TiArrowRepeat } from 'react-icons/ti';
import ProgressBar from './ProgressBar';

interface IProps {
  readonly isPlaying: boolean;
  readonly onPlayPauseClick: (arg: boolean) => void;
  readonly onPrevClick: () => void;
  readonly onNextClick: () => void;
  readonly handlePointer: (arg: number) => void;
  readonly audioDuration: number;
  readonly audioCurrentTime: number;
}

function AudioControls({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
  audioDuration,
  audioCurrentTime,
  handlePointer,
}: IProps) {
  return (
    <div className='flex flex-col justify-center items-center w-[80%]'>
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
          <BsFillPauseCircleFill
            className='pause text-white'
            onClick={() => onPlayPauseClick(false)}
            size={38}
          />
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
      <ProgressBar
        audioDuration={audioDuration}
        audioCurrentTime={audioCurrentTime}
        onPointer={handlePointer}
      />
    </div>
  );
}

export default AudioControls;
