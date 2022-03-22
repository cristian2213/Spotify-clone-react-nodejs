import { Link } from 'react-router-dom';

function DropDownItem({ name, to = '/', Icon = null }) {
  return (
    <li className='list-none h-10'>
      <Link
        to={to}
        className=' block px-3 py-2 text-sm rounded-sm tex-white hover:text-white  hover:bg-[rgba(255,255,255,.1)]'
        role='menuitem'
      >
        <span className='flex flex-row justify-between items-center'>
          <span className='tracking-tight'>{name}</span>
          {Icon && Icon}
        </span>
      </Link>
    </li>
  );
}

export default DropDownItem;
