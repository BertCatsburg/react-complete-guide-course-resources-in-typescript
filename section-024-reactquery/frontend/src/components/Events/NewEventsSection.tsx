import React from 'react'
import {useQuery, QueryFunctionContext} from '@tanstack/react-query'

import {ErrorBlock, LoadingIndicator} from '../UI'
import {EventItem} from './index'
import {fetchEvents} from "../../util";
import {EventInterface} from "../types";

export const NewEventsSection = () => {

  const {data, isPending, isError, error, isSuccess} = useQuery({
    queryKey: ['events', {max: 3}], // Dedicated Query Key for 'max = 3' query.

    // QueryKey is passed into queryFn
    queryFn: ({signal, queryKey}: Partial<QueryFunctionContext>) => {
      console.log(queryKey)
      return fetchEvents({signal: signal, max: 3}) // queryKey should be here, but does not work
    },
    // queryFn: ({signal, queryKey}: {signal: AbortSignal}) => fetchEvents({signal, max: 3}),
    staleTime: 5000,
  })

  let content;

  if (isPending) {
    content = <LoadingIndicator/>;
  }

  if (isError) {
    console.log(error)
    content = (
      <ErrorBlock title="An error occurred" error={error}/>
    );
  }

  if (isSuccess && data) {
    console.log(data)
    content = (
      <ul className="events-list">
        {
          data.map((event: EventInterface) => {
              return (
                <li key={event.id}>
                  <EventItem event={event}/>
                </li>
              )
            }
          )
        }
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
