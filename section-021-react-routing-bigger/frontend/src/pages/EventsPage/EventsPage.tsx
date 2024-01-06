import React from 'react'
import {EventsList} from "../../components";
import {EventInterface} from '../../types'
import {useLoaderData} from "react-router";
import {EventResponse} from "../../components/App/routeLoaderEvents";

export const EventsPage = () => {

  const data: EventResponse = useLoaderData() as EventResponse
  const events: EventInterface[] = data.events

  return (
    <React.Fragment>
      <EventsList events={events}/>
    </React.Fragment>
  )
}
