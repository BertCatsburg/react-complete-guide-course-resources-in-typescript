import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import React from 'react'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import {Events, EventDetails, NewEvent, EditEvent} from '../Events'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/events"/>,
  },
  {
    path: '/events',
    element: <Events/>,

    children: [
      {
        path: '/events/new',
        element: <NewEvent/>,
      },
    ],
  },
  {
    path: '/events/:id',
    element: <EventDetails/>,
    children: [
      {
        path: '/events/:id/edit',
        element: <EditEvent/>,
      },
    ],
  },
]);

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  );
}
