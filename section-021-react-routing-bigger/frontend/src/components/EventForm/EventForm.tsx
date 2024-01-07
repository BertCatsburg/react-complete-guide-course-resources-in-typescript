import React from 'react'
import {useNavigate, Form, useNavigation} from 'react-router-dom';

import classes from './EventForm.module.css';
import {EventInterface} from "../../types";

interface EventFormInterface {
  method?: any | undefined
  event?: EventInterface | undefined
}

export const EventForm = ({event}: EventFormInterface) => {
  const navigate = useNavigate();
  const navigation = useNavigation()

  const isSubmitting: boolean = navigation.state === 'submitting'

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method='post' className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event ? event.title : ''}/>
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event ? event.image : ''}/>
      </p>
      <p>For example:
        https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D</p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event ? event.date : ''}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows={5} required defaultValue={event ? event.description : ''}/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? 'Submitting' : 'Save'}</button>
      </div>
    </Form>
  );
}
