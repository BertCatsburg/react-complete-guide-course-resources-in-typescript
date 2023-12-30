import classes from './Counter.module.css'
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {counterActions, RootState} from "../../store";

export const Counter = () => {

  const dispatch = useDispatch()

  const counter = useSelector((state: RootState) => state.counter.counter)
  const show: boolean = useSelector((state: RootState) => state.counter.showCounter)
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)



  const incrementHandler = (): void => {
    dispatch(counterActions.increment())
  }
  const decrementHandler = (): void => {
    dispatch(counterActions.decrement())
  }
  const increaseHandler = (): void => {
    dispatch(counterActions.increase({amount: 5}))
  }

  const toggleCounterHandler = (): void => {
    dispatch(counterActions.toggleCounter())
  };

  if (!isAuthenticated) {
    return null
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {
        show && <div className={classes.value}>{counter}</div>
      }
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
