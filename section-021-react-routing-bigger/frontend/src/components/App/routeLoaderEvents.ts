import {EventInterface} from "../../types";

export interface EventResponse extends Response {
  events: EventInterface[]
}

export const RouteLoaderEvents = async (): Promise<EventResponse> => {
  const response: EventResponse = await fetch('http://localhost:8080/events') as EventResponse

  if (!response.ok) {
    throw new Response(
      JSON.stringify({message: 'Cannot fetch Events'}),
      {status: 500})
  } else {
    return response
  }
}
