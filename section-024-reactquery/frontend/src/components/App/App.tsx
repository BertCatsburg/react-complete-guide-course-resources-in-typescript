import {
  Navigate,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom'
import React from 'react'
import {QueryClientProvider} from '@tanstack/react-query'
import { queryClient} from '../../util'
import {
  Events,
  EventDetails,
  NewEvent,
  EditEvent,
  loaderForEditEvent,
} from '../Events'

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="events"/>} />
          <Route path="events/*" element={<Events />}>
            <Route path="new" element={<NewEvent />} />
          </Route>
          <Route path="events/:id/*" element={<EventDetails />}>
            <Route path="edit" element={<EditEvent />} loader={loaderForEditEvent} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
