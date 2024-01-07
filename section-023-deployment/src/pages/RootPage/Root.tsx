import { Outlet } from 'react-router-dom'
import {MainNavigation} from '../../components'
import React from 'react'

export const  RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

