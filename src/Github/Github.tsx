import axios from 'axios';
import React from 'react';
import { SearchUserType, UserType } from '../types/types';

import s from './Github.module.css';
import { SearchBlock } from './SearchBlock/SearchBlock';
import { UserDetailsBlock } from './UserDetailsBlock/UserDetailsBlock';
import { UsersBlock } from './UsersBlock/UsersBlock';


export const App = () => {

  const [isChangedInput, setIsChangedInput] = React.useState(false)
  const [activeUser, setActiveUser] = React.useState<SearchUserType | null>(null);

  const [searchInput, setSearchInput] = React.useState('it-kamasutra');





  return (
    <div className={s.container}>
      <div>
        <SearchBlock
          searchInput={searchInput}
          setSearchInput={(tempSearchInput: string) => setSearchInput(tempSearchInput)}
          setIsChangedInput={(isChangedInput) => setIsChangedInput(isChangedInput)}
          isChangedInput={isChangedInput}
        />

        <UsersBlock
          searchInput={searchInput}
          isChangedInput={isChangedInput}
          activeUser={activeUser}
          // seconds={seconds}
          // setSeconds={(seconds) => setSeconds(seconds)}
          setActiveUser={setActiveUser}
        />
      </div>
      <UserDetailsBlock 
        activeUser={activeUser} 
      />
    </div>
  );
};
// export const _App = () => {

//   let [count, setCount] = React.useState({
//     c1: 10,
//     c2: 10,
//   })

//   return (
//     <div>

//       <div>
//         <div>Ванёк</div>
//         <div>{count.c1}</div>
//         <button onClick={() => setCount((actual) => {
//           return {...actual, c1: actual.c1 + 1}
//         })}>+</button>
//       </div>

//       <div>
//         <div>Петро</div>
//         <div>{count.c2}</div>
//         <button onClick={() => setCount((actual) => {
//           return {...actual, c2: actual.c2 + 1}
//         } )}>+</button>
//       </div>

//       <div>
//         <button onClick={() => {setCount((actual) => ({
//           ...count,
//           c1: count.c1 - 1, c2: count.c2 - 1
//         }))}}>-</button>
//       </div>

//       <div>
//         <button onClick={() => setCount((actual) => {
//           return {...actual, c1: 10, c2: 10}
//         })}>
//           reset
//         </button>
//       </div>

//     </div>
//   );
// }

export default App;

// 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
