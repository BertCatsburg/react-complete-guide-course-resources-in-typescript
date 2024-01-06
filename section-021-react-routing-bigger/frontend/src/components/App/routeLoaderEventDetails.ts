import {json, LoaderFunctionArgs} from 'react-router-dom'

export const RouteLoaderEventDetails =
  async ({request, params}: LoaderFunctionArgs): Promise<any> => {

    const eventid = params.eventid // eventid is specified in the routes
    const response = await fetch(`http://localhost:8080/events/${eventid}`)

    console.log(response)
    if (!response.ok) {
      throw json(
        {message: `Cannot fetch Details for selected Event on ${request.url}`},
        {status: response.status, statusText: response.statusText})
    } else {
      return response
    }
  }
