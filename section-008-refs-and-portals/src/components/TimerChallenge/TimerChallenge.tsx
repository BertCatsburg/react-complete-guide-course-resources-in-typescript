import {TimeChallengeSection} from "./css/TimeChallengeSection.tsx";
import {useState, useRef, Fragment} from "react";
import {ResultModal} from "../ResultModal/ResultModal.tsx";

interface TimerChallengeInterface {
  title: string;
  targetTime: number;
}

export const TimerChallenge = ({title, targetTime}: TimerChallengeInterface) => {

  const timer = useRef(0)
  const dialog = useRef<any>(null)

  const steps = 100
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current)
    setTimeRemaining(targetTime * 1000)
    dialog.current ? dialog.current.yourOwnFunctionName() : undefined
  }

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - steps)
    }, steps)
  }

  const handleStop = () => {
    clearInterval(timer.current)
  }

  return (
    <Fragment>
      <ResultModal ref={dialog} result="lost" targetTime={targetTime}/>
      <TimeChallengeSection>
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>

        <button onClick={timerIsActive ? handleStop : handleStart}>
          {timerIsActive ? 'Stop' : 'Start'} Challenge
        </button>

        <p className={timerIsActive ? 'active' : ''}>
          {timerIsActive ? 'Time is running' : 'Time is not running'}
        </p>
      </TimeChallengeSection>
    </Fragment>

  )
}

