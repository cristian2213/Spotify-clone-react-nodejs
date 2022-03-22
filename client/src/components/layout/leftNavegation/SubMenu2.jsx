import { BsFillPlusSquareFill, BsBookmarkHeartFill } from 'react-icons/bs';
import NavItem from '../NavItem';

function SubMenu2() {
  return (
    <div className='flex flex-col gap-6 mb-7'>
      <NavItem
        icon={<BsFillPlusSquareFill size={24} />}
        name='Create Playlist'
        to='playlist'
      />
      <NavItem
        icon={<BsBookmarkHeartFill size={24} />}
        name='Liked Songs'
        to='tracks'
      />
    </div>
  );
}

export default SubMenu2;
