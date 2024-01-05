import React from 'react'
import {useParams} from 'react-router-dom'

export const EventDetailPage = () => {

  const params = useParams()
  console.log(params)

  return (
    <React.Fragment>
      <h1>EventDetailPage</h1>
      <p>Event is {params.eventid}</p>
    </React.Fragment>
  )
}
