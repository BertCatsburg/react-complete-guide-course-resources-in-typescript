import {log} from '../../log.js';
import React from 'react'

interface CounterOutputInterface {
  value: number
}

export const CounterOutput = ({value}: CounterOutputInterface) => {
  log('<CounterOutput /> rendered', 2);

  const cssClass = value >= 0 ? 'counter-output' : 'counter-output negative';
  return <span className={cssClass}>{value}</span>;
}
