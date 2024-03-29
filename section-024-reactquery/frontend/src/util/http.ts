import {MyError} from "../components/types";
import { QueryFunctionContext} from '@tanstack/react-query';
import { QueryClient} from "@tanstack/react-query";

export const queryClient = new QueryClient();

// Extend with optional Interface QueryFunctionContext
export interface fetchEventsInterface extends Partial<QueryFunctionContext> {
  searchTerm?: string | undefined;
  max?: number | undefined
}

/**
 * Fetch Events
 * @param signal
 * @param searchTerm
 * @param max
 */
export const fetchEvents = async ({signal, searchTerm, max}: fetchEventsInterface) => {
  // console.log(`[util/http] - Search Term = ${JSON.stringify(searchTerm)}`)
  let url = 'http://localhost:3000/events';
  if (searchTerm && max) {
    url += '?search=' + searchTerm + '&max=' + max
  } else if (searchTerm) {
    url += '?search=' + searchTerm
  } else if (max) {
    url += '?max=' + max
  }

  const options : Partial<Request>  = {
    method: 'GET',
    signal: signal || undefined
  }
  const response: Response = await fetch(url, options);

  if (!response.ok) {
    const error: MyError = new Error('An error occurred while fetching the events');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const {events} = await response.json();

  return events;
}

/**
 * Create New Event
 * @param eventData
 */
export const createNewEvent = async (eventData: any) => {

  const response: Response = await fetch(`http://localhost:3000/events`, {
    method: 'POST',
    body: JSON.stringify(eventData),
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (!response.ok) {
    const responseJSON = await response.json()
    const error: MyError = new Error(`An error occurred while creating the event: ${responseJSON.message}`);
    error.code = response.status;
    error.info = responseJSON.message
    throw error;
  }

  const {event} = await response.json()

  return event;
}


/**
 * Fetch Selectable Images
 * @param signal
 */
export async function fetchSelectableImages({ signal }: {signal: AbortSignal}) {
  const response = await fetch(`http://localhost:3000/events/images`, { signal });

  if (!response.ok) {
    const error: MyError = new Error('An error occurred while fetching the images');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { images } = await response.json();

  // console.log('[Util/Http/FetchSelectableImages] - Fetched images:')
  // console.log(images)
  return images;
}


/**
 * Fetch 1 Event
 * @param id
 * @param signal
 */
export async function fetchEvent({ id, signal }: {id: string, signal: AbortSignal}) {
  const response = await fetch(`http://localhost:3000/events/${id}`, { signal });

  if (!response.ok) {
    const error: MyError = new Error('An error occurred while fetching the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { event } = await response.json();

  return event;
}


/**
 * Delete an Event
 * @param id
 */
export async function deleteEvent({ id }: {id: string}) {
  const response = await fetch(`http://localhost:3000/events/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const error:MyError = new Error('An error occurred while deleting the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}


/**
 * Update an Event
 * @param id
 * @param event
 */
export async function updateEvent({ id, event }: {id: string, event: any}) {
  const response = await fetch(`http://localhost:3000/events/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ event }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error: MyError = new Error('An error occurred while updating the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}
