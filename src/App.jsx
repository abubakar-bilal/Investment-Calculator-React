import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newVal) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: +newVal };
    });
  }

  const isValidInput = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!isValidInput && (
        <p className="center">Please input a positive duration</p>
      )}
      {isValidInput && <Results userInput={userInput} />}
    </>
  );
}

export default App;
