import TopBarDropDown from './TopBarDropDown';
import TopNavigationControlls from './TopNavigationControlls';
import TopNavegationUpgradeBtn from './TopNavegationUpgradeBtn';

function TopNavigationBar() {
  return (
    <div className='flex flex-row items-center justify-between mb-6 py-4'>
      {/* CONTROLLS LEFT - RIGHT */}
      <TopNavigationControlls />

      {/* UPGRADE BUTTON - DROPDOWN */}
      <div className='flex flex-row items-center justify-center gap-14'>
        <TopNavegationUpgradeBtn />
        <TopBarDropDown />
      </div>
    </div>
  );
}

export default TopNavigationBar;
