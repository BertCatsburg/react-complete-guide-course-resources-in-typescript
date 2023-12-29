import React, {FormEvent} from 'react'
import {Input} from '../index'
import {isEmail, isNotEmpty, hasMinLength} from '../../util/validation'
import {useInput} from "../../hooks";

export const StateLogin = () => {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput(
    '',
    // Pass multiple validation functions combined in an anonymous function to useInput
    (value) => isEmail(value) && isNotEmpty(value)
  )

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput(
    '',
    (value) => hasMinLength(value, 6)
  )

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (emailHasError || passwordHasError) {
      return
    }

    // Send to API backend
    console.log(`Submitted with email ${emailValue} and password ${passwordValue}`)
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
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue as string}
          error={emailHasError && "Please enter a valid email address"}
        />

        <Input
          label="password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue as string}
          error={passwordHasError && "Please enter a valid password"}
        />

      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
