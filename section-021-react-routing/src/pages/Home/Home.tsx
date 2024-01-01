import React from 'react'
import {useNavigate} from "react-router"

export const HomePage = () => {

  const navigate = useNavigate()

  const navigateHandler = () => {
    navigate('/products')
  }

  return (
    <React.Fragment>
      <h1>My Home Page</h1>
      <button className="navigateButton" onClick={navigateHandler}>Navigate to Products</button>
    </React.Fragment>
  )
}
