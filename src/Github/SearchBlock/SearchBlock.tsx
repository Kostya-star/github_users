import axios from 'axios';
import React from 'react';
import { SearchResultType, SearchUserType } from '../../types/types';



export type SearchBlockType = {
  searchInput: string
  setSearchInput: (fixedValue: string) => void
  setIsChanged: (isChangedInput: boolean) => void
  isChangedInput: boolean
};


export const SearchBlock:React.FC<SearchBlockType> = ({ searchInput, setSearchInput, setIsChanged, isChangedInput }) => {

  const [tempSearchInput, setTempSearchInput] = React.useState('');
// console.log('tempSearchInput', tempSearchInput);

React.useEffect(() => {
  setTempSearchInput(searchInput)
}, [searchInput])

React.useEffect(() => {
  setIsChanged(!isChangedInput)
  // console.log(!isChangedInput === false);
  
}, [tempSearchInput])



  return (
    <div>
      <input
        placeholder="search"
        onChange={(e) => setTempSearchInput(e.currentTarget.value)}
        value={tempSearchInput}
      />
      <button
        disabled={tempSearchInput === 'it-kamasutra'}
        onClick={() => {
          setSearchInput(tempSearchInput)
        }}
      >
        find
      </button>
    </div>
  );
};
