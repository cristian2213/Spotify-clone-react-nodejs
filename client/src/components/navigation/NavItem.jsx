import { NavLink } from 'react-router-dom';

function NavItem({ icon, name, to = '/' }) {
  return (
    <li className='text-[#b3b3b3] text-[14px] font-bold '>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? 'text-white' : '')}
      >
        <span className='flex flex-row items-center gap-3'>
          {icon}
          {name}
        </span>
      </NavLink>
    </li>
  );
}

export default NavItem;
