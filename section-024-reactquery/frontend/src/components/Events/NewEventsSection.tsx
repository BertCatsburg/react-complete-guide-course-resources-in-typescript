import React from 'react'
import {useQuery} from '@tanstack/react-query'

import {ErrorBlock, LoadingIndicator} from '../UI'
import {EventItem} from './index'
import {fetchEvents} from "../../util";
import {EventInterface} from "../types";

export const  NewEventsSection = () => {

  const {data, isPending, isError, error} = useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents // A function that returns a Promise
  })
  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
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
