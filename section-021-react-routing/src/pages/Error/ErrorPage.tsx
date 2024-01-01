import {MainNavigation} from "../../components";
import React from 'react'

export const ErrorPage = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main>
        <h1>An error occurred!</h1>
        <p>Could not find this page</p>
      </main>
    </React.Fragment>
  )
}
