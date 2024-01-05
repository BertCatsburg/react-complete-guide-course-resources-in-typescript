import {EventInterface} from "../../types";

export const RouteLoaderEvents = async (): Promise<EventInterface[]> => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // Handle invalid response
    return []
  } else {
    const resData = await response.json()
    return resData.events as EventInterface[]
  }
}
