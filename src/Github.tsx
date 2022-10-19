import axios from 'axios';
import React from 'react';
import './App.css';

import s from './css/Github.module.css'


type SearchUserType = {
  login: string
  id: number 
}
type SearchResultType = {
  items: SearchUserType[]
}

export const App = () => {
  let [activeUser, setActiveUser] = React.useState<SearchUserType | null>(null)
  let [users, setUsers] = React.useState<SearchUserType[]>([])
  const [tempSearchInput, setTempSearchInput] = React.useState('it-kamasutra')
  const [searchInput, setSearchInput] = React.useState('it-kamasutra')

  // console.log(activeUser);
  // console.log(tempSearchInput);
  // console.log(searchInput);
  
  

  // const onSelectTitle = (user: string) => { activeUser === user ? setActiveUser(document.title) : '' }

  React.useEffect(() => {
    // console.log('1 useeffect');
    
    if (activeUser) document.title = activeUser.login
    
  }, [activeUser])

  React.useEffect(() => {
    // console.log('2 useeffect');

    axios.get<SearchResultType>(`https://api.github.com/search/users?q=${searchInput}`)
    .then((res) => setUsers(res.data.items))
  }, [searchInput])

  return (
    <div className={s.container}>
      <div>
        <div>
          <input onChange={(e) => setTempSearchInput(e.currentTarget.value)} value={tempSearchInput} placeholder='search'/> 
          <button disabled={!tempSearchInput} onClick={() => setSearchInput(tempSearchInput)}>find</button>
        </div>
        <ul>
          {users.map((user) => <li
                                  key={user.id}
                                  className={activeUser === user ? s.active : ''} 
                                  onClick={() => setActiveUser(user)} >
                                    {user.login}
                              </li>)}
        </ul>
      </div>
      <div className={s.userData}>
        <h2>Username</h2>
        <div>Details</div>
      </div>
    </div>
  )
}
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
