import axios from 'axios';
import React from 'react';
import { SearchUserType, UserType } from '../../types/types';
import s from './UsersBlock.module.css'


type UsersBlockType = {
  users: SearchUserType[]
  setUserDetails: (userDetails: UserType) => void
  isChangedInput: boolean
}


export const UsersBlock: React.FC<UsersBlockType> = ({ users, setUserDetails, isChangedInput }) => {
// console.log(isChangedInput);

  let [activeUser, setActiveUser] = React.useState<SearchUserType | null>(null);

  React.useEffect(() => {
    if (activeUser) document.title = activeUser.login;
  }, [activeUser]);

  React.useEffect(() => {
    if (!!activeUser) {
      axios
        .get<UserType>(
          `https://api.github.com/users/${activeUser.login}`,
        )
        .then((res) => setUserDetails(res.data));
    }
  }, [activeUser]);


  return (
    <>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className={activeUser === user ? s.active : ''}
            onClick={() => isChangedInput === false ? setActiveUser(user) : false}
            // onClick={() => false}
          >
            {user.login}
          </li>
        ))}
      </ul>
    </>
  );
};
