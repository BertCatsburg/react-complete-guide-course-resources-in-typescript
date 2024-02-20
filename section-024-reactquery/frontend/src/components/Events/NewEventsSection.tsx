import React from 'react'
import {useQuery} from '@tanstack/react-query'

import {ErrorBlock, LoadingIndicator} from '../UI'
import {EventItem} from './index'
import {fetchEvents} from "../../util";
import {EventInterface} from "../types";

interface ParamInterface {
  max: number
}

type QueryKeyType = [
  string,
  ParamInterface
]

export const NewEventsSection = () => {

  const {data, isPending, isError, error, isSuccess} = useQuery({
    queryKey: ['events', {max: 3}], // Dedicated Query Key for 'max = 3' query.

    // QueryKey is passed into queryFn
    queryFn: ({signal, queryKey}: {signal: AbortSignal, queryKey: QueryKeyType}) => {
      return fetchEvents({signal: signal, ...queryKey[1]})
    },
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
