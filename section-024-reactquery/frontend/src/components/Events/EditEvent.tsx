import {Link, useNavigate, useParams} from 'react-router-dom';
import {ErrorBlock, LoadingIndicator, Modal} from '../UI';
import {EventForm} from './index'
import React from 'react'
// import {ImageInterface} from "../types";
import {QueryFunctionContext, useQuery, useMutation} from '@tanstack/react-query'
import {
  fetchEvent,
  queryClient,
  updateEvent
} from "../../util";

export const EditEvent = () => {
  const navigate = useNavigate()
  const {id} = useParams()

  if (!id) {
    // Won't happen because Router will take over then.
    console.error('[EditEvent] - We are here without an id ??')
    navigate('/events')
    return // To make linter happen in the rest of the code.
  } else {
    console.log(`[EditEvent] - Passed ID = ${id}`)
  }

  const {
    data,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['events', {id: id}],
    queryFn: ({signal}: QueryFunctionContext) => fetchEvent({id, signal}),
  })

  const {
    mutate
  } = useMutation({
    mutationFn: updateEvent,

    // Optimistic Editing : Update the cached data in ReactQuery with onMutate
    onMutate: async (data) => {
      // Take the new data (in data.event)
      const newEvent = data.event;

      // Cancel any outgoing queries for this key
      await queryClient.cancelQueries({queryKey: ['events', {id: id}]});

      // We need the old data in case we need to rollback
      const previousEvent = queryClient.getQueryData(['events', {id: id}])

      // Poke the new data into the React Query Cache
      queryClient.setQueryData(
        ['events', {id: id}],
        newEvent
      );

      // Return the Context
      return {previousEvent: previousEvent}
    },

    // In case of Error, rollback to old data
    onError: (error, data, context) => {
      if (context) {
        queryClient.setQueryData(['events', {id: id}], context.previousEvent)
      }
    },

    // Whenever this mutation is done, regardless ot failed/success, this function runs.
    // Just to make sure Backend-data is the same as Frontend-data
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['events', {id: id}]})
    },
  })


  const handleSubmit = (formData: any): void => {
    console.log(formData)
    mutate({
      id: id,
      event: formData
    })
    navigate('../')
  }

  const handleClose = () => {
    navigate('../');
  }

  let content;

  if (isPending) {
    content = (
      <div className="center">
        <LoadingIndicator/>
      </div>
    )
  }

  if (isError) {
    content = (
      <div className="center">
        <ErrorBlock title="Error getting the Event to Edit" message={error.message}/>
        <div className="form-actions">
          <Link to="../" className="button">Okay</Link>
        </div>
      </div>
    )
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    )
  }

  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}
