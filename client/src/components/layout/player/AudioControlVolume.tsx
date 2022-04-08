interface IPros {
  type?: string;
}

function Volumes({ type }: IPros): JSX.Element {
  switch (true) {
    case type === 'mute':
      return (
        <button>
          <svg
            role='presentation'
            height='16'
            width='16'
            aria-label='Volume off'
            id='volume-icon'
            viewBox='0 0 16 16'
            className='Svg-sc-1bi12j5-0 jgfuCe'
            fill='#fff'
          >
            <path d='M13.86 5.47a.75.75 0 00-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 008.8 6.53L10.269 8l-1.47 1.47a.75.75 0 101.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 001.06-1.06L12.39 8l1.47-1.47a.75.75 0 000-1.06z'></path>
            <path d='M10.116 1.5A.75.75 0 008.991.85l-6.925 4a3.642 3.642 0 00-1.33 4.967 3.639 3.639 0 001.33 1.332l6.925 4a.75.75 0 001.125-.649v-1.906a4.73 4.73 0 01-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 01-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z'></path>
          </svg>
        </button>
      );
    case type === 'low':
      return (
        <button>
          <svg
            role='presentation'
            height='16'
            width='16'
            aria-label='Volume low'
            id='volume-icon'
            viewBox='0 0 16 16'
            className='Svg-sc-1bi12j5-0 jgfuCe'
            fill='#fff'
          >
            <path d='M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z'></path>
          </svg>
        </button>
      );
    case type === 'medium':
      return (
        <button>
          <svg
            role='presentation'
            height='16'
            width='16'
            aria-label='Volume medium'
            id='volume-icon'
            viewBox='0 0 16 16'
            className='Svg-sc-1bi12j5-0 jgfuCe'
            fill='#fff'
          >
            <path d='M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 000-8.474v1.65a2.999 2.999 0 010 5.175v1.649z'></path>
          </svg>
        </button>
      );
    default:
      return (
        <button>
          <svg
            role='presentation'
            height='16'
            width='16'
            aria-label='Volume high'
            id='volume-icon'
            viewBox='0 0 16 16'
            className='Svg-sc-1bi12j5-0 jgfuCe'
            fill='#fff'
          >
            <path d='M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z'></path>
            <path d='M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z'></path>
          </svg>
        </button>
      );
  }
}

export default Volumes;
