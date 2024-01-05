import classes from './EventsNavigation.module.css';
import React from 'react'
import {NavLink} from "react-router-dom";


export const  EventsNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/events"
              className={({isActive}) => isActive ? classes.active : undefined}
              end={true}
            >All Events</NavLink>
          </li>
          <li>
            <NavLink
              to="/events/new"
              className={({isActive}) => isActive ? classes.active : undefined}
            >New Event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
