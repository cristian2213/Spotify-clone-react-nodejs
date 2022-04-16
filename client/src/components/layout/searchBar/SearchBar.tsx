import { BsSearch, BsXLg } from 'react-icons/bs';
import { useRef, useState, useContext, ChangeEvent } from 'react';
import { SongContext } from '../../../context/songs/SongContext';

let timer: any;

function SearchBar() {
  const inputRef = useRef<any>();
  const [searchInput, setSearchInput] = useState('');
  const { searchSong, clearSearches } = useContext(SongContext);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
    clearTimeout(timer);
    timer = setTimeout(() => {
      const params = {
        search: searchInput.trim().split(' ').join('-'),
        limit: 12,
      };
      searchSong(params);
    }, 800);
  };

  const handleCleanInput = () => {
    setSearchInput('');
    clearSearches();
  };

  return (
    <form
      // overflow-hidden
      className='bg-white 
      w-[364px] h-10
      py-3 px-3
      ml-5 mr-auto 
      rounded-[20px]
      flex items-center justify-start
      cursor-text'
      role='search'
      onClick={handleFocus}
      onSubmit={(event) => event.preventDefault()}
    >
      <BsSearch
        size={26}
        color='#121212'
        className='cursor-text'
        onClick={handleFocus}
      />
      <input
        type='text'
        placeholder='Song name'
        className='w-full h-full  
          px-4
          text-black text-[13px]
          placeholder:text-black
          focus:outline-none
          hover:outline-none'
        value={searchInput}
        onChange={handleSearch}
        ref={inputRef}
      />
      <BsXLg
        size={24}
        color='#121212'
        className='opacity-70 cursor-pointer'
        onClick={handleCleanInput}
      />
    </form>
  );
}

export default SearchBar;
