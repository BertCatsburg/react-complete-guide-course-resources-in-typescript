import React, {useState} from 'react'
import { log } from '../../log.js';

interface ConfigureCounterInterface {
  onSet: (newCount: number) => void
}

export const ConfigureCounter = ({onSet}: ConfigureCounterInterface) => {
  log('<ConfigureCounter', 1)

  const [enteredNumber, setEnteredNumber] = useState(0);

  const  handleChange= (event: React.FormEvent<HTMLInputElement>) => {
    setEnteredNumber(+event.currentTarget.value);
  }

  function handleSetClick() {
    onSet(enteredNumber);
    setEnteredNumber(0);
  }

  return (
    <section id="configure-counter">
      <h2>Set Counter</h2>
      <input type="number" onChange={handleChange} value={enteredNumber} />
      <button onClick={handleSetClick}>Set</button>
    </section>
  )
}
