import { MouseEvent } from 'react';

interface IProps {
  classes: string;
  onClick: () => void;
}

function PlayBtn({ classes, onClick }: IProps) {
  return (
    <div
      className={`card-play-button bg-[#1ed760] w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#1fdf64] hover:scale-105 ${classes}`}
      onClick={onClick}
    >
      <svg
        role='img'
        height='24'
        width='24'
        viewBox='0 0 24 24'
        className='Svg-sc-1bi12j5-0 hDgDGI'
      >
        <path d='M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z'></path>
      </svg>
    </div>
  );
}

export default PlayBtn;
