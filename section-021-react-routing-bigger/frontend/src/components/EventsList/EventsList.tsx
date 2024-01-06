import classes from './EventsList.module.css'
import React from 'react'
import {EventInterface} from "../../types"
import {Link} from "react-router-dom";

interface EventsListInterface {
  events: EventInterface[]
}

export const EventsList = ({events}: EventsListInterface) => {

  return (
    <div className={classes.events}>

      <ul className={classes.list}>
        {
          events.map((event: any) => (
            <li key={event.id} className={classes.item}>
              <Link to={event.id}>
                <img src={event.image} alt={event.title}/>
                <div className={classes.content}>
                  <h2>{event.title}</h2>
                  <time>{event.date}</time>
                </div>
              </Link>
            </li>
          ))
        }
      </ul>

    </div>
  );
}
