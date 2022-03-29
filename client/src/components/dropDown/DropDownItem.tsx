import { Link } from 'react-router-dom';

interface IProps {
  name: string;
  to?: string;
  Icon?: JSX.Element;
}

function DropDownItem({ name, to = '/', Icon }: IProps) {
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
