import { NavLink } from 'react-router-dom';

interface IProps {
  readonly icon: JSX.Element;
  readonly name: string;
  readonly to?: string;
}

function NavItem({ icon, name, to = '/' }: IProps) {
  return (
    <li className='text-[#b3b3b3] text-[14px] font-bold hover:text-white transition-all'>
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
