import React, {useState} from 'react'
import {PlayerSection} from "./css/PlayerSection.tsx"

export const PlayerWithState = () => {

  const [enteredPlayerName, setEnteredPlayerName] = useState<string>('')
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setSubmitted(false)
    setEnteredPlayerName(event.currentTarget.value)
  }

  const handleClick = (): void => {
    setSubmitted(true)
  }

  return (
    <PlayerSection>
      <h2>Welcome {submitted && enteredPlayerName.length > 0 ? enteredPlayerName : 'Unknown Entity'}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </PlayerSection>
  );
}
