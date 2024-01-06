import {createBrowserRouter} from 'react-router-dom'
import React from 'react'
import {
  HomePage,
  EventsPage,
  NewEventPage,
  EventDetailPage,
  EditEventPage,
  RootLayout,
  EventsLayout,
  ErrorPage
} from '../../pages'
import {RouteLoaderEvents} from './routeLoaderEvents'
import {RouteLoaderEventDetails} from "./routeLoaderEventDetails";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
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
            loader: RouteLoaderEvents
          },
          {
            path: ':eventid',
            element: <EventDetailPage/>,
            loader: RouteLoaderEventDetails
          },
          {
            path: 'new',
            element: <NewEventPage/>,
          },
          {
            path: ':eventid/edit',
            element: <EditEventPage/>,
          },
        ]
      },

    ]
  }
])
