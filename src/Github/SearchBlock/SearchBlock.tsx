import axios from 'axios';
import React from 'react';
import { SearchResultType, SearchUserType } from '../../types/types';
import s from './SearchBlock.module.css'



export type SearchBlockType = {
  searchInput: string
  setSearchInput: (fixedValue: string) => void
  setIsChangedInput: (isChangedInput: boolean) => void
  isChangedInput: boolean
};


export const SearchBlock:React.FC<SearchBlockType> = ({ searchInput, setSearchInput, setIsChangedInput, isChangedInput}) => {

  const [tempSearchInput, setTempSearchInput] = React.useState('');

React.useEffect(() => {
  // здесь при первом рендере tempSearchInput = '' меняется на  tempSearchInput = 'it-kamasutra'
  
  setTempSearchInput(searchInput)
  setIsChangedInput(false)
}, [searchInput])


  return (
    <div>
      <input
        placeholder="search"
        onChange={(e) => {
          setTempSearchInput(e.currentTarget.value)
          setIsChangedInput(true)
        }}
        value={tempSearchInput}
      />
      <button
        onClick={() => {
          setSearchInput(tempSearchInput)
          // setIsChangedInput(false)
        }}
        className={s.searchBtn}
      >
        find
      </button>
      <button 
        onClick={() => {
          setSearchInput('it-kamasutra')
          setTempSearchInput('it-kamasutra')
          setIsChangedInput(false)
          }}
        disabled={tempSearchInput === 'it-kamasutra'} 
        className={s.searchBtn}
          > reset! </button>
    </div>
  );
};
