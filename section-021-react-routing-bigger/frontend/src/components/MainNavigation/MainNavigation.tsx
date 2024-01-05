import classes from './MainNavigation.module.css'
import React from 'react'
import { NavLink} from 'react-router-dom'

export const  MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>

          <li><NavLink
            to="/"
            className={({isActive}) => isActive ? classes.active : undefined}
            end={true}
          >Home</NavLink></li>

          <li><NavLink
            to="/events"
            className={({isActive}) => isActive ? classes.active : undefined}
          >Events</NavLink></li>

          {/*<li><NavLink*/}
          {/*  to="/events/:eventid"*/}
          {/*  className={({isActive}) => isActive ? classes.active : undefined}*/}
          {/*>Event Detail</NavLink></li>*/}

          {/*<li><NavLink*/}
          {/*  to="/events/new"*/}
          {/*  className={({isActive}) => isActive ? classes.active : undefined}*/}
          {/*>New Event</NavLink></li>*/}

          {/*<li><NavLink*/}
          {/*  to="/events/:id/edit"*/}
          {/*  className={({isActive}) => isActive ? classes.active : undefined}*/}
          {/*>Edit Event</NavLink></li>*/}

        </ul>
      </nav>
    </header>
  );
}
