import React from 'react'
import {PageContent, MainNavigation} from "../../components"
import {useRouteError} from 'react-router-dom'

interface ErrorInterface {
  status: number
  statusText: string
  internal: boolean
  data: {
    message:string
  }
}

export const ErrorPage = () => {
  const error: ErrorInterface = useRouteError() as ErrorInterface

  let title = 'An error occurred'
  let message = 'Something went wrong!'
  let status: number = 500
  let statusText: string = ''

  console.log(error)

  if (error.status && error.data) {
    status = error.status
    statusText = error.statusText
    message = error.data.message
  }

  return (
    <React.Fragment>
      <MainNavigation/>
      <PageContent title={title}>
        <p>{message} ({status}, {statusText})</p>

      </PageContent>
    </React.Fragment>
  )
}
