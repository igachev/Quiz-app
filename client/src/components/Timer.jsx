import { useEffect, useState } from "react";

export default function Timer({
    totalQuestions,
    status,
    dispatch
}) {

    const [timeRemaining,setTimeRemaining] = useState(() => 20)
    const [minutes,setMinutes] = useState(() => timeRemaining / 60);
    const [seconds,setSeconds] = useState(() => ((timeRemaining / 60) * 60) % 60);

    function interval() {
        setTimeRemaining((time) => time - 1);
        setMinutes((mins) => Math.floor(timeRemaining / 60))
        setSeconds((secs) => Math.floor((timeRemaining / 60) * 60) % 60)
      //  console.log(`time remaing: ${timeRemaining} minutes: ${minutes} seconds: ${seconds}`)
    }

    useEffect(() => {
     let timer = setInterval(interval,1000)

      if(status === 'completed' || timeRemaining === 0) {
        clearInterval(timer)
        dispatch({type: 'game over'})
        }
        
        return () => {
        clearInterval(timer)
        }
    },[timeRemaining])

    return (
        <div className="timer">
            <p>{minutes} : {seconds}</p>
        </div>
    )
}