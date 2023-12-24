import React, {useState} from 'react'
import {Header, UserInput, UserInputDataInterface, Results} from "../index"
// import { calculateInvestmentResults } from '../../util/investment'

export const App = () => {

  const [userInput, setUserInput] = useState<UserInputDataInterface>({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  const inputIsValid: boolean = userInput.duration >= 1

  const handleChange = (inputIdentifier: string, newValue: string) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: +newValue
      }
    })
  }


  return (
    <React.Fragment>
      <Header/>
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      {
        inputIsValid
        ? <Results userInput={userInput}/>
        : <p className="center">Please enter Duration greater than Zero</p>}
    </React.Fragment>
  )
}
