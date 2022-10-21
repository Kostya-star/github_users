import React from 'react';
import { SearchUserType } from '../../types/types';



type TimerPropsType = {
  seconds: number
  activeUser: SearchUserType | null
  setSeconds: (seconds: number) => void
}
export const Timer: React.FC<TimerPropsType> = ({ seconds, activeUser, setSeconds }) => {

  React.useEffect(() => {
    if (seconds !== 10) setSeconds(seconds = 10)
    onStartTimer()
  }, [activeUser]);


  function onStartTimer() {
    const startBtn = document.getElementById('selectedUser') as HTMLElement | null
    
    if (startBtn !== null) {
      startBtn.addEventListener('click', startTimer())
    }

    if (seconds === 0) {
      setSeconds(seconds = 10)
    }
  }
  const startTimer = () => {
    // console.log('starttimerfunc');
    
    let myInterval = setInterval(() => { 
      if (seconds > 0) {
        setSeconds(--seconds)
      }
      else if (seconds === 0) clearInterval(myInterval);
    }, 300);
    return () => {
      clearInterval(myInterval);
    };
  }


  return (
    <>
      <h1>{seconds}</h1>
    </>
  );
};
