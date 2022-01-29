import React, { useState } from "react";
import Button from "./Button";
import Header from "./Header";
import Statistics from "./Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const incrementGood = () => setGood(good + 1);
  const incrementBad = () => setBad(bad + 1);
  const incrementNeutral = () => setNeutral(neutral + 1);

  return (
    <div>
      <Header title="give feedback" />
      <Button onClick={incrementGood} name="good" />
      <Button onClick={incrementNeutral} name="neutral" />
      <Button onClick={incrementBad} name="bad" />
      <Header title="statistics" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App;