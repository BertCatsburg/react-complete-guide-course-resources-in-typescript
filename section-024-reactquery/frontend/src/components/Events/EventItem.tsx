import { Link } from 'react-router-dom';
import React from 'react'
import {EventInterface} from "../types";

interface EventItemInterfave {
  event: EventInterface
}

/**
 * Event Item - Show an Event Item on the overview page, with a link to the details page.
 *
 * @param event
 * @constructor
 */
export const  EventItem = ({ event }: EventItemInterfave) => {
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  // console.log(`[EventItem] - Event Id = ${event.id}`)
  return (
    <article className="event-item">
      <img src={`http://localhost:3000/${event.image}`} alt={event.title} />
      <div className="event-item-content">
        <div>
          <h2>{event.title}</h2>
          <p className="event-item-date">{formattedDate}</p>
          <p className="event-item-location">{event.location}</p>
        </div>
        <p>
          <Link to={`/events/${event.id}`} className="button">
            View Details
          </Link>
        </p>
      </div>
    </article>
  );
}
