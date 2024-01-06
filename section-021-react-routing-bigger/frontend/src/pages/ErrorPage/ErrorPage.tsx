import React from 'react'
import {PageContent, MainNavigation} from "../../components"
import {useRouteError} from 'react-router-dom'

interface ErrorInterface {
  status: number
  statusText: string
  internal: boolean
  data: string
}

export const ErrorPage = () => {
  const error: ErrorInterface = useRouteError() as ErrorInterface

  let title = 'An error occurred'
  let message = 'Something went wrong!'
  let status: number = 500

  if (error.status && error.data) {
    status = error.status
    message = JSON.parse(error.data).message
  }

  return (
    <React.Fragment>
      <MainNavigation/>
      <PageContent title={title}>
        <p>{message} ({status})</p>

      </PageContent>
    </React.Fragment>
  )
}
