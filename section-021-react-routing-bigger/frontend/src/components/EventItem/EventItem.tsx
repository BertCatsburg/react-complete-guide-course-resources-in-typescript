import classes from './EventItem.module.css';
import React from 'react'
import {Link, useSubmit} from 'react-router-dom'

interface EventItemInterface {
  event: any
}

export const EventItem = ({event}: EventItemInterface) => {

  const submit = useSubmit()

  const startDeleteHandler = () => {
    const proceed: boolean = window.confirm('Do you want to delete this Event?')
    if (proceed) {
      // Trigger the Action in the Route
      submit(
        null,
        {
          method: 'DELETE', // Passing the method in the Request object
          // action: '/a-different-path'  // Optional, if the action is on a different path
        }
      )
    }
  }

  return (
    <article className={classes.event}>

      <img src={event.image} alt={event.title}/>

      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>

      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>

    </article>
  );
}
