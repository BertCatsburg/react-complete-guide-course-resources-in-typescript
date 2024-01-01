import React from 'react'
import {Outlet} from 'react-router-dom'
import {MainNavigation} from "../../components"
import classes from './RootLayout.module.css'

export const RootLayout = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </React.Fragment>
  )
}
