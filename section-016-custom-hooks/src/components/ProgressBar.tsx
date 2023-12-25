import React, {useEffect, useState} from 'react'


interface ProgressBarInterface {
  maxtimer: number
  intervalsteps: number
}
export const ProgressBar = ({maxtimer, intervalsteps}: ProgressBarInterface) => {
  const [remainingTime, setRemainingTime] = useState(maxtimer)

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime): number => prevTime - intervalsteps)
    }, intervalsteps)

    return  () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <progress value={remainingTime} max={maxtimer} />
  )
}
