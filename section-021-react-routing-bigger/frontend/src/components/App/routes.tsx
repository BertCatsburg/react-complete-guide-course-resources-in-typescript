import {createBrowserRouter} from 'react-router-dom'
import React from 'react'
import {HomePage, EventsPage, NewEventPage, EventDetailPage, EditEventPage, RootLayout, EventsLayout} from '../../pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: 'events',
        element: <EventsLayout/>,
        children: [
          {
            index: true,
            element: <EventsPage/>,
          },
          {
            path: ':eventid',
            element: <EventDetailPage/>,
          },
          {
            path: 'new',
            element: <NewEventPage/>,
          },
          {
            path: ':id/edit',
            element: <EditEventPage/>,
          },
        ]
      },

    ]
  }
])
