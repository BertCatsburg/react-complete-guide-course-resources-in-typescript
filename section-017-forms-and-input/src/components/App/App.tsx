import React from 'react'
import {Header, Signup, Login, StateLogin} from '../index'

const formToShow: string = 'statelogin' // 'signup'

export const App = () =>  {
  return (
    <>
      <Header />
      <main>
        {formToShow === 'login' && <Login />}
        {formToShow === 'statelogin' && <StateLogin />}
        {formToShow === 'signup' && <Signup />}
      </main>
    </>
  );
}
