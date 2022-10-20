import React from 'react';
import { UserType } from '../../types/types';
import s from './UserDetails.module.css'


type UserDetailsBlockType = {
  userDetails: UserType | null
}
export const UserDetailsBlock: React.FC<UserDetailsBlockType> = ({ userDetails }) => {
  return (
    <div className={s.userData}>
      <h2>{userDetails && userDetails.login}</h2>
      {userDetails && (
        <div>
          <img src={userDetails.avatar_url} alt="image" /> <br />
          {userDetails.login}, followers: {userDetails.followers}
        </div>
      )}
    </div>
  );
};
