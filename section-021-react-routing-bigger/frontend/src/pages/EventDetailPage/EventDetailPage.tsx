import React from 'react'
import {useLoaderData} from 'react-router-dom'
import {EventItem} from "../../components";
import {EventInterface} from "../../types";

export const EventDetailPage = () => {

  const data: {event:EventInterface} = useLoaderData() as {event: EventInterface}

  return (
    <React.Fragment>
      <EventItem event={data.event}/>
    </React.Fragment>
  )
}
