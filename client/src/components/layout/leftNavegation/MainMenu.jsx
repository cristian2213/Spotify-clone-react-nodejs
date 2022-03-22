import SubMenu1 from './SubMenu1';
import SubMenu2 from './SubMenu2';

function MainMenu() {
  return (
    <nav>
      <ul className='flex flex-col gap-6 '>
        <SubMenu1 />
        <SubMenu2 />
      </ul>
    </nav>
  );
}

export default MainMenu;
