import {Link, useNavigate} from 'react-router-dom';
import React from 'react'
import {useMutation} from '@tanstack/react-query'

import {ErrorBlock, Modal} from '../UI';
import {EventForm} from './index'
import {createNewEvent, queryClient} from "../../util";


export const NewEvent = () => {
  const navigate = useNavigate();

  const {
    mutate,
    isPending,
    isError,
    error
  } = useMutation({
    mutationFn: createNewEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['events']})
      navigate('/events')
    }
  })

  function handleSubmit(formData: FormData) {
    mutate({event: formData})
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && 'Submitting...'}
        {!isPending &&
            <>
                <Link to="../" className="button-text">
                    Cancel
                </Link>
                <button type="submit" className="button">
                    Create
                </button>
            </>
        }
      </EventForm>
      {isError && <ErrorBlock title="An error has occurred" message={error.message || 'Failed to create Event'}/>}
    </Modal>
  );
}
