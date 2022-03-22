import DropDownContent from './DropDownContent';
import DropDownIcon from './DropDownIcon';

function DropDown({ switchBtnBg, setMenuStatus, setArrowDirection }) {
  return (
    <button
      type='button'
      className={`flex flex-row items-center justify-center text-sm rounded-3xl  gap-2 p-[2px] pr-2 ${switchBtnBg}`}
      id='options-menu'
      onClick={() => setMenuStatus((preValue) => !preValue)}
    >
      <DropDownContent />
      <DropDownIcon setArrowDirection={setArrowDirection} />
    </button>
  );
}

export default DropDown;
