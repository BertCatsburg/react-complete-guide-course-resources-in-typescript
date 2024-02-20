import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import React from 'react'

import {WelcomePage, ChallengesPage} from '../../pages'

const router = createBrowserRouter([
  {path: '/', element: <WelcomePage/>},
  {path: '/challenges', element: <ChallengesPage/>},
]);

export const App = () => {
  return <RouterProvider router={router}/>;
}
