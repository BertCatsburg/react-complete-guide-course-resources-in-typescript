import React from 'react'
import {Outlet, useNavigation} from 'react-router-dom'
import {MainNavigation} from "../../components"

export const RootLayout = () => {

  const navigation = useNavigation()

  return (
    <React.Fragment>
      <MainNavigation/>
      <main>
        {
          navigation.state === 'loading' && <p>Loading...</p>
        }
        <Outlet/>
      </main>
    </React.Fragment>
  )
}
