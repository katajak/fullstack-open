import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = (props) => {
  return (
    <p>
      {props.text}: {props.value} {props.extra}
    </p>
  )
}


const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad

  let average = 0
  if (total !== 0) {
    average = (props.good - props.bad) / total
  }

  let positiveP = 0
  if (total !== 0) {
    positiveP = (props.good / total) * 100
  }

  if (total === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h2>statistics</h2>
      <StatisticLine text="good" value={props.good} extra="" />
      <StatisticLine text="neutral" value={props.neutral} extra="" />
      <StatisticLine text="bad" value={props.bad} extra="" />
      <StatisticLine text="total" value={total} extra="" />
      <StatisticLine text="average" value={average} extra="" />
      <StatisticLine text="positive" value={positiveP} extra="%" />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  }

  const handleBadClick = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
