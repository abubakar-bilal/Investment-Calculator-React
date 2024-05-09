import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ userInput }) {
  const resultsData = calculateInvestmentResults(userInput);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;
  console.log(resultsData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>value End of Year</th>
          <th>annual Investment</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{yearData.annualInvestment}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
