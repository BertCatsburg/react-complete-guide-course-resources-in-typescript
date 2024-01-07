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
import {RouteActionNewEvent} from "./routeActionNewEvent";
import {RouteActionDeleteEvent} from "./routeActionDeleteEvent";

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
            loader: RouteLoaderEventDetails,
            id: 'eventLoader',
            children: [
              {
                index: true,
                element: <EventDetailPage/>,
                action: RouteActionDeleteEvent,
              },
              {
                path: 'edit',
                element: <EditEventPage/>,
              },
            ]
          },
          {
            path: 'new',
            element: <NewEventPage/>,
            action: RouteActionNewEvent
          },

        ]
      },

    ]
  }
])
