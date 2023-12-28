import React, {ChangeEvent, FormEvent, useState} from 'react'
import {Input} from '../index'

interface EnteredValuesInterface {
  email: string
  password: string
}

export const StateLogin = () => {
  const [enteredValues, setEnteredValues] = useState<EnteredValuesInterface>({
    email: '',
    password: ''
  })

  const [didEdit, setDidEdit] = useState(
    {
      email: false,
      password: false
    }
  )

  const emailIsInvalid:boolean = didEdit.email && !enteredValues.email.includes('@')
  const passwordIsInvalid: boolean = didEdit.password && enteredValues.password.trim().length < 6

  const handleInputChange = (identifier: string, event: ChangeEvent<HTMLInputElement>): void => {
    setEnteredValues((oldValues: EnteredValuesInterface) => {
      return {
        ...oldValues,
        [identifier]: event.target.value
      }
    })
    setDidEdit((prevEdit) => {
      return ({
        ...prevEdit,
        [identifier]: false
      })
    })
  }

  const handleInputBlur = (identifier: string) => {
    setDidEdit((prevEdit) => {
      return ({
        ...prevEdit,
        [identifier]: true
      })
    })
  }


  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log(`Submitted with email ${enteredValues.email} and password ${enteredValues.password}`)
    setEnteredValues({email: '', password: ''})
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>State-Login</h2>

      <div className="control-row">
        <Input
          label="email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur('email')}
          onChange={(event: ChangeEvent<HTMLInputElement>) => handleInputChange('email', event)}
          value={enteredValues.email}
          error={emailIsInvalid && "Please enter a valid email address"}
        />

        <Input
          label="password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur('password')}
          onChange={(event: ChangeEvent<HTMLInputElement>) => handleInputChange('password', event)}
          value={enteredValues.password}
          error={passwordIsInvalid && "Please enter a valid password"}
        />

      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
