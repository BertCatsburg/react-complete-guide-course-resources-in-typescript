import { Link, useNavigate } from 'react-router-dom';
import {Modal} from '../UI';
import {EventForm} from './index'
import React from 'react'
import {ImageInterface} from "../types";

export const  EditEvent = () => {
  const navigate = useNavigate()

  const handleSubmit = ({image, ...data}: {image: ImageInterface}): void => {
    console.log(image)
    console.log(data)
  }

  const  handleClose = () => {
    navigate('../');
  }

  return (
    <Modal onClose={handleClose}>
      <EventForm inputData={null} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    </Modal>
  );
}
