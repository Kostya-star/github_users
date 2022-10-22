import axios from 'axios';
import React from 'react';
import { SearchUserType, UserType } from '../../types/types';
import s from './UserDetails.module.css'
import { Timer } from './Timer';


type UserDetailsBlockType = {
  // userDetails: UserType | null
  activeUser: SearchUserType | null
}
export const UserDetailsBlock: React.FC<UserDetailsBlockType> = ({ activeUser }) => {
  const [userDetails, setUserDetails] = React.useState<UserType | null>(null);

  let [seconds, setSeconds] = React.useState(10);
    
  
  React.useEffect(() => {
    if (!!activeUser) {
      axios
      .get<UserType>(
        `https://api.github.com/users/${activeUser.login}`,
        )
        .then((res) => {
          setUserDetails(res.data)
        });
      }
    }, [activeUser]);
    
  return (
    <>
    <Timer 
      seconds={seconds}
      activeUser={activeUser}
      setSeconds={(seconds: number) => setSeconds(seconds)} 
      />
    {
      seconds > 0 ? (
        <div className={s.userData}>
          <h2>{userDetails && userDetails.login}</h2>
          {userDetails && (
            <div>
              <img src={userDetails.avatar_url} alt="image" /> <br />
              {userDetails.login}, followers: {userDetails.followers}
            </div>
          )}
        </div>
      ) : null
    }
    </>
  );
};

