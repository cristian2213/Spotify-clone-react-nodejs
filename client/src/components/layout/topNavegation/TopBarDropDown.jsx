import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import DropDown from '../../dropDown/DropDown';
import DropDownList from '../../dropDown/DropDownList';
import DropDownItem from '../../dropDown/DropDownItem';

function TopBarDropDown() {
  const [menuIsOpen, setMenuStatus] = useState(false);
  const setArrowDirection = menuIsOpen ? 'rotate-180' : '';
  const showMenu = menuIsOpen ? 'block' : 'hidden';
  const switchBtnBg = menuIsOpen ? 'bg-[#282828]' : 'bg-[rgba(0,0,0,.7)]';

  return (
    <div className='relative inline-block text-left z-50'>
      <DropDown
        switchBtnBg={switchBtnBg}
        setMenuStatus={setMenuStatus}
        setArrowDirection={setArrowDirection}
      />

      <DropDownList showMenu={showMenu}>
        <DropDownItem
          name='Account'
          icon='Icon'
          Icon={<FaExternalLinkAlt size={16} />}
        />
        <DropDownItem name='Profile' icon='Icon' />
        <DropDownItem
          name='Upgrade to Premium'
          icon='Icon'
          Icon={<FaExternalLinkAlt size={16} />}
        />
        <DropDownItem name='Log out' icon='Icon' />
      </DropDownList>
    </div>
  );
}

export default TopBarDropDown;
