import classes from './EventItem.module.css';
import React from 'react'

interface EventItemInterface {
  event: any
}

export const EventItem = ({ event }: EventItemInterface) => {

  const  startDeleteHandler = () => {
    // ...
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <a href="edit">Edit</a>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}
