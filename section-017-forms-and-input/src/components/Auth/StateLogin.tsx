import React, {ChangeEvent, FormEvent, useState} from 'react'

interface EnteredValuesInterface {
  email: string
  password: string
}

export const Login = () => {
  const [enteredValues, setEnteredValues] = useState<EnteredValuesInterface>({
    email: '',
    password: ''
  })

  const handleInputChange = (identifier: string, event: ChangeEvent<HTMLInputElement>): void => {
    setEnteredValues((oldValues: EnteredValuesInterface) => {
      return {
        ...oldValues,
        [identifier]: event.target.value
      }
    })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log(`Submitted with email ${enteredValues.email} and password ${enteredValues.password}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event: ChangeEvent<HTMLInputElement>) => handleInputChange('email', event)}
            value={enteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event: ChangeEvent<HTMLInputElement>) => handleInputChange('password', event)}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
