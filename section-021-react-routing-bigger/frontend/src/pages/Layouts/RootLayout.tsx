import React from 'react'
import {Outlet} from 'react-router-dom'
import {MainNavigation} from "../../components"

export const RootLayout = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  )
}
