import DropDownContent from './DropDownContent';
import DropDownIcon from './DropDownIcon';

interface IProps {
  switchBtnBg: string;
  setMenuStatus: (fn: any) => void;
  setArrowDirection: string;
}

function DropDown({ switchBtnBg, setMenuStatus, setArrowDirection }: IProps) {
  return (
    <>
      <button
        type='button'
        className={`flex flex-row items-center justify-center text-sm rounded-3xl  gap-2 p-[2px] pr-2 ${switchBtnBg}`}
        id='options-menu'
        onClick={() => setMenuStatus((preValue: any) => !preValue)}
      >
        <DropDownContent />
        <DropDownIcon setArrowDirection={setArrowDirection} />
      </button>
    </>
  );
}

export default DropDown;
