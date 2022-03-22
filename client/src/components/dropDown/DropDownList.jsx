function DropDownList({ showMenu, children }) {
  return (
    <div
      className='p-1'
      role='menu'
      aria-orientation='vertical'
      aria-labelledby='options-menu'
    >
      <div
        className={`origin-top-right absolute right-0 mt-2 w-52 rounded-sm shadow-lg bg-[#282828] ${showMenu}`}
      >
        {children}
      </div>
    </div>
  );
}

export default DropDownList;
