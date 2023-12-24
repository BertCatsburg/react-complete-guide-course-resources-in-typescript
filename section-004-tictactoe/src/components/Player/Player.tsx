import React, {useState} from "react";
import './Player.css';

export interface PlayerInterface {
  initialName: string;
  symbol: string;
  isActive: boolean;
  onNameChange: (symbol: string, newName: string) => void;
}

export const Player = ({initialName, symbol, isActive, onNameChange}: PlayerInterface) => {
  const [isEditing, setIsEditing] = useState(false)
  const [playerName, setPlayerName] = useState(initialName)

  const handleEditClick = () => {
    setIsEditing((oldIsEditing) => !oldIsEditing)
    if (isEditing) {
      onNameChange(symbol, playerName)
    }
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPlayerName(event.currentTarget.value)
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>
  let buttonCaption: string = 'Edit'
  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
    buttonCaption = 'Save'
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => handleEditClick()}>{buttonCaption}</button>
    </li>
  )
}
