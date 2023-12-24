import React from 'react'
import {UserInputDataInterface} from '../index'
import {calculateInvestmentResults, formatter} from '../../util/investment';



export const Results = ({userInput}: {userInput: UserInputDataInterface}) => {
  const resultsData = calculateInvestmentResults(userInput)
  const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment

  return (
    <React.Fragment>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
        {
          resultsData.map((r) => {
            const totalInterest = r.valueEndOfYear - (r.annualInvestment * r.year) - initialInvestment
            const totalAmountInvested = r.valueEndOfYear - totalInterest
            return (
              <tr key={r.year}>
                <td>{r.year}</td>
                <td>{formatter.format(r.valueEndOfYear)}</td>
                <td>{formatter.format(r.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            )
          })
        }
        </tbody>

      </table>
    </React.Fragment>
  )
}
