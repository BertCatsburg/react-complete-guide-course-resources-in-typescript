import React from 'react'
import {useQuery} from '@tanstack/react-query'

import {ErrorBlock, LoadingIndicator} from '../UI'
import {EventItem} from './index'
import {fetchEvents} from "../../util";
import {EventInterface} from "../types";

export const  NewEventsSection = () => {

  const {data, isPending, isError, error} = useQuery({
    queryKey: ['events'],
    // queryFn: ({signal}: QueryFunctionContext) => fetchEvents({signal: signal}), // A function that returns a Promise
    queryFn: fetchEvents, // A function that returns a Promise
    staleTime: 0, // Immediately send the request in the background to check if cache it up-to-date
    gcTime: 60000, // Default is 5 minutes (300000), 60000 = 1 minute.
  })
  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    console.log(error)
    content = (
      <ErrorBlock title="An error occurred" error={error} />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event: EventInterface) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}