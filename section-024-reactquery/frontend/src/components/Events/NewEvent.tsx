import { Link, useNavigate } from 'react-router-dom';
import React from 'react'

import {Modal} from '../UI';
import {EventForm} from './index'
import {ImageInterface} from "../types";

export const  NewEvent = () => {
  const navigate = useNavigate();

  function handleSubmit({image, ...data}: {image: ImageInterface}) {
    console.log(image)
    console.log(data)
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        <>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Create
          </button>
        </>
      </EventForm>
    </Modal>
  );
}
