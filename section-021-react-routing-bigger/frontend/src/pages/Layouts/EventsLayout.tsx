import React from 'react'
import {Outlet} from 'react-router-dom'
import {EventsNavigation} from "../../components"

export const EventsLayout = () => {
  return (
    <React.Fragment>
      <EventsNavigation />
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  )
}
