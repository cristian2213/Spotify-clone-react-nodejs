import TopBarDropDown from './TopBarDropDown';
import TopNavigationControlls from './TopNavigationControlls';
import TopNavegationUpgradeBtn from './TopNavegationUpgradeBtn';
import { useLocation } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';

function TopNavigationBar() {
  const { pathname } = useLocation();
  const showSearchBar = pathname.slice(1) === 'search' ? <SearchBar /> : null;

  return (
    <div className='flex flex-row items-center justify-between mb-6 py-4'>
      {/* CONTROLLS LEFT - RIGHT */}
      <TopNavigationControlls />

      {/* Search bar */}
      {showSearchBar}

      {/* UPGRADE BUTTON - DROPDOWN */}
      <div className='flex flex-row items-center justify-center gap-14'>
        <TopNavegationUpgradeBtn />
        <TopBarDropDown />
      </div>
    </div>
  );
}

export default TopNavigationBar;
