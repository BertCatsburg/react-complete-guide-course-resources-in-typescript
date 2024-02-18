import {MyError} from "../components/types";
import { QueryFunctionContext} from '@tanstack/react-query';

// Extend with optional Interface QueryFunctionContext
export interface fetchEventsInterface extends Partial<QueryFunctionContext> {
  searchTerm?: string | undefined;
}

export const fetchEvents = async ({signal, searchTerm}: fetchEventsInterface) => {

  // console.log(`[util/http] - Search Term = ${JSON.stringify(searchTerm)}`)
  let url = 'http://localhost:3000/events';
  if (searchTerm) {
    url += '?search=' + searchTerm
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
