import axios from 'axios';
import React from 'react';
import { SearchResultType, SearchUserType, UserType } from '../../types/types';
import s from './UsersBlock.module.css'


type UsersBlockType = {
  // setUserDetails: (userDetails: UserType) => void
  isChangedInput: boolean
  searchInput: string
  activeUser: SearchUserType | null
  // seconds: number
  // setSeconds: (seconds: number) => void
  setActiveUser: (user: SearchUserType | null) => void
}


export const UsersBlock: React.FC<UsersBlockType> = ({ isChangedInput, searchInput, activeUser, setActiveUser }) => {
// console.log(isChangedInput);

  let [users, setUsers] = React.useState<SearchUserType[]>([]);

  React.useEffect(() => {
    if (activeUser) document.title = activeUser.login;
  }, [activeUser]);



  React.useEffect(() => {
    axios
      .get<SearchResultType>(
        `https://api.github.com/search/users?q=${searchInput}`,
      )
      .then((res) => setUsers(res.data.items));
      // if (isChangedInput) setIsChangedInput(isChangedInput)
      // else setIsChangedInput(!isChangedInput)
  }, [searchInput]);


  // const onInputChanged = (user: SearchUserType) => {
  //   if (!isChangedInput) setActiveUser(user)
  //   else {
  //     alert('plz click on the find button!')
  //     return false
  //   }
  // }

  
  // const startTimer = () => {
  //   console.log('starttimerfunc');
  //   // console.log(seconds);
    
    
  //       let myInterval = setInterval(() => {
  //         if (seconds >= 0) {
  //           // @ts-ignore
  //           setSeconds(seconds--)
  //           console.log(seconds);
  //         }
  //         else if (seconds === 0) clearInterval(myInterval);
  //       }, 200);
  //       return () => {
  //         clearInterval(myInterval);
  //       };
  //     }


  return (
    <>
    {
      !isChangedInput &&
        <ul>
        {users.map((user) => (
          <li
            id='selectedUser'
            key={user.id}
            className={activeUser === user ? s.active : ''}
            onClick={() => {
              setActiveUser(user)
              // startTimer()
            }}
          >
            {user.login}
          </li>
        ))}
      </ul>
    }
    </>
  );
};
