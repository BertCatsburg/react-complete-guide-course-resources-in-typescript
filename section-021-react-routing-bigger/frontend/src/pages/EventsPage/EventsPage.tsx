import React from 'react'
import {EventsList} from "../../components";
import {EventInterface} from '../../types'
import {useLoaderData} from "react-router";

export const EventsPage = () => {

  const events: EventInterface[] = useLoaderData() as EventInterface[]
  // Data is async, but react-router fixes that

  return (
    <React.Fragment>
      <EventsList events={events}/>
    </React.Fragment>
  )
}
