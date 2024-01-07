import {ActionFunctionArgs, json, redirect} from "react-router-dom";

export const RouteActionDeleteEvent = async ({request, params}: ActionFunctionArgs) => {

  const response = await fetch(`http://localhost:8080/events/${params.eventid}`, {
    method: request.method, // Get the method from the request object
  })

  if (!response.ok) {
    throw json({message: 'Cannot delete Event'}, {status: response.status, statusText: response.statusText})
  }
  return redirect('/events')
}
