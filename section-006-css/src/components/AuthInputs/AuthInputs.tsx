import React, {useState} from 'react'
import classes from './AuthInputs.module.css'
import {styled} from 'styled-components'
import {BigButton, Label, Input, CustomInput} from "../index";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`


export const AuthInputs = () => {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleInputChange(identifier: string, value: string) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id={classes.authinputs}>
      <ControlContainer>
        <CustomInput
          label="Email"
          type="email"
          invalid={emailNotValid}
          onChange={(event) => handleInputChange('email', event.currentTarget.value)}
        />
        <CustomInput
          label="Password"
          invalid={passwordNotValid}
          type="password"
          onChange={(event) => handleInputChange('password', event.currentTarget.value)
        }/>
      </ControlContainer>
      <div className={classes.actions}>
        <button type="button" className={classes.textbutton}>
          Create a new account
        </button>
        <BigButton onClick={handleLogin}>Sign In</BigButton>
      </div>
    </div>
  )
}
