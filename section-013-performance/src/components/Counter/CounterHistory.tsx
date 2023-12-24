import React, {ReactNode, useState} from 'react';

import { log } from '../../log.js';

interface HistoryItemInterface {
  count: ReactNode
}
const  HistoryItem = ({ count }: HistoryItemInterface) => {
  log('<HistoryItem /> rendered', 3);

  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected((prevSelected) => !prevSelected);
  }

  return (
    <li onClick={handleClick} className={selected ? 'selected' : undefined}>
      {count}
    </li>
  );
}

interface CounterHistoryInterface {
  history: ReactNode[]
}
export const  CounterHistory = ({ history }: CounterHistoryInterface) => {
  log('<CounterHistory /> rendered', 2);

  return (
    <ol>
      {history.map((count, index) => (
        <HistoryItem key={index} count={count} />
      ))}
    </ol>
  );
}
