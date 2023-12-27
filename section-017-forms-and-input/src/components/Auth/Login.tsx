import React, {FormEvent, useRef, useState} from 'react'

export const Login = () => {

  const [emailIsInvalid, setEmailIsInvalid ] = useState<boolean>(false)

  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const enteredEmail: string | undefined = email.current?.value // email can be undefined !!
    const enteredPassword: string | undefined = password.current?.value // password can be undefined !!

    const emailIsValid = enteredEmail && enteredEmail.includes('@')

    if (!emailIsValid) {
      setEmailIsInvalid(true)
      return
    }

    setEmailIsInvalid(false)
    // HTTP Request with entered data
    console.log(`Submitted with email ${enteredEmail} and password ${enteredPassword}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            ref={email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={password}
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
