import {useState, useRef} from 'react'
import {PlayerSection} from "./css/PlayerSection.tsx"

export const Player = () => {
  const playerName = useRef<HTMLInputElement>(null)
  const [enteredPlayerName, setEnteredPlayerName] = useState<string>('')

  const handleClick = (): void => {
    setEnteredPlayerName(playerName.current ? playerName.current.value : '');
    // Empty the name when clicked.
    if (playerName.current) {
      playerName.current.value = ''
    }
  }

  return (
    <PlayerSection>
      <h2>Welcome {enteredPlayerName ?? 'Unknown Entity'}</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </PlayerSection>
  );
}
