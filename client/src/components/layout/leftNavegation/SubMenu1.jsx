import { BsFillHouseDoorFill, BsSearch, BsBookHalf } from 'react-icons/bs';
import NavItem from '../NavItem';

function SubMenu1() {
  return (
    <div className='flex flex-col gap-5 mb-7'>
      <NavItem icon={<BsFillHouseDoorFill size={24} />} name='Home' />
      <NavItem icon={<BsSearch size={24} />} name='Search' to='search' />
      <NavItem
        icon={<BsBookHalf size={24} />}
        name='Your Library'
        to='collections'
      />
    </div>
  );
}

export default SubMenu1;
