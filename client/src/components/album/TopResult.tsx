import SongTitle from './SongTitle';
import TopResultCard from './TopResultCard';

function TopResult({ song }: any) {
  return (
    <div className='w-2/5'>
      <SongTitle
        title='Top result'
        domProps={{
          className: 'mb-6 text-white font-bold text-[24px]',
        }}
      />

      <TopResultCard song={song} />
    </div>
  );
}

export default TopResult;
