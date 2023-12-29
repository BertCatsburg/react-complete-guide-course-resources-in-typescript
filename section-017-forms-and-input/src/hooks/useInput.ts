import {ChangeEvent, useState} from "react";

interface UseInputInterface {
  handleInputBlur: () => void
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: unknown
  hasError: boolean
}

/*
    useInput Hook

    Input:
      - defaultValue : The initial value for this field
      - validationFunction : A function validating the input

    Output:
      - handleInputBlur : Function which executes onBlur
      - handleInputChange : Function which executes onChange
      - value : Current value of the input field
      - hasError : Indicator is the value does not comply to validationFunction
 */
export const useInput = (defaultValue: unknown, validationFunction: (value: any) => boolean): UseInputInterface => {

  const [enteredValue, setEnteredValue] = useState<unknown>(defaultValue)

  const [didEdit, setDidEdit] = useState<boolean>(false)

  const valueIsValid: boolean = validationFunction(enteredValue)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEnteredValue(event.target.value)
    setDidEdit(false)
  }

  const handleInputBlur = (): void => {
    setDidEdit(true)
  }

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  }
}
