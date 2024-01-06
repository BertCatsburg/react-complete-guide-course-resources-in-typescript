import React from 'react'
import {useRouteLoaderData} from 'react-router-dom'
import {EventItem} from "../../components";
import {EventInterface} from "../../types";

export const EventDetailPage = () => {

  console.log('Starting EventDetailPage')

  const data: {event:EventInterface} = useRouteLoaderData('eventLoader') as {event: EventInterface}
  console.log('EventDetailPage: Data', data)

  return (
    <React.Fragment>
      <EventItem event={data.event}/>
    </React.Fragment>
  )
}
