import React from 'react'
import {Link} from "react-router-dom";

interface DUMMYEVENTInterface {
  id: string
  title: string
}

const DUMMY_EVENTS: DUMMYEVENTInterface[] = [
  {
    id: 'e1',
    title: 'Voetballen'
  },
  {
    id: 'e2',
    title: 'Basketballen'
  }
]
export const EventsPage = () => {
  return (
    <React.Fragment>
      <h1>EventsPage</h1>
      <ul>
      {
        DUMMY_EVENTS.map((event: DUMMYEVENTInterface) => {
          return (
            <li key={event.id}><Link to={event.id}>{event.title}</Link></li>
          )
        })
      }
      </ul>
    </React.Fragment>
  )
}
