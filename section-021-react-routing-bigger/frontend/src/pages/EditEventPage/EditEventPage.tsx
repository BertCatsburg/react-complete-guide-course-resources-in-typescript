import React from 'react'
import {EventForm} from "../../components";
import {useRouteLoaderData} from "react-router-dom";
import {EventInterface} from "../../types";

export const EditEventPage = () => {
  const data: {event:EventInterface} = useRouteLoaderData('eventLoader') as {event: EventInterface}

  return (
    <React.Fragment>
      <EventForm method="XX" event={data.event} />
    </React.Fragment>
  )
}
