import {EventInterface} from "../../types";
import {json} from 'react-router-dom'

export interface EventResponse extends Response {
  events: EventInterface[]
}

export const RouteLoaderEvents = async (): Promise<any> => {
  const response: EventResponse = await fetch('http://localhost:8080/events') as EventResponse

  console.log(response)
  if (!response.ok) {
    throw json(
      {message: 'Cannot fetch Events'},
      {status: response.status, statusText: response.statusText})
  } else {
    return response
  }
}
