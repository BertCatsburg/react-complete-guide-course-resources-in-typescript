import {FormEvent, useRef, useState} from 'react';
import React from 'react'
import {QueryFunctionContext, useQuery} from "@tanstack/react-query";
import {fetchEvents} from "../../util";
import {ErrorBlock, LoadingIndicator} from "../UI";
import {EventInterface} from "../types";
import {EventItem} from "./EventItem";

export const FindEventSection = () => {
  const searchElement = useRef<HTMLInputElement>(null);
  // Use a useState because useRef does not update state,
  // and we want a rerender because we use the searchTerm in the useQuery queryKey
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined)

  const {data, isPending, isError, error} = useQuery({
    queryKey: ['events', {search: searchTerm}], // Each searchTerm having its own queryKey
    queryFn: ({signal}: QueryFunctionContext) => fetchEvents({signal, searchTerm: searchTerm})
  })

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(`[FindEventSection/handleSubmit] - searchTerm = ${searchElement && searchElement.current ? searchElement.current.value : 'Unknown'}`)
    setSearchTerm(searchElement && searchElement.current ? searchElement.current.value : undefined)
    console.log(e.currentTarget.value)
  }

  let content = <p>Please enter a search term to find events.</p>

  if (isPending) {
    content = <LoadingIndicator/>
  }

  if (isError) {
    content = <ErrorBlock title="An error occurrd" error={error} message={error.message || 'Failed to Fetch'}/>
  }

  if (data) {
    content = (
      <ul className="events-list">
        {
          data.map((event: EventInterface) => {
            return (
              <li key={event.id}>
                <EventItem event={event}/>
              </li>
            )
          })
        }
      </ul>
    )
  }

  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}
