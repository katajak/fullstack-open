import { useState } from 'react'


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
      <p>good: {props.good}</p>
      <p>neutral: {props.neutral}</p>
      <p>bad: {props.bad}</p>
      <p>total: {total}</p>
      <p>average: {average}</p>
      <p>positive: {positiveP} %</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
