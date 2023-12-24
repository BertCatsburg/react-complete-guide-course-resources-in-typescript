import React, { useState } from 'react';
import {Counter, Header, ConfigureCounter} from '../index'

import { log } from '../../log.js';

export const App = () => {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  const handleSetCount = (newCount: number) => {
    setChosenCount(newCount)
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount}/>
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}
