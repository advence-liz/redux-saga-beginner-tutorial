/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'
const buttonStyle = { display: 'block', color: 'green', padding: 20 }
const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync, onIncrementLast ,onIncrementLeading}) =>
  <div>
    <button style={buttonStyle} onClick={onIncrement}>
      Increment
        </button>
    <br></br>
    <button style={buttonStyle} onClick={onDecrement}>
      Decrement
        </button>
    <br></br>
    <button style={buttonStyle} onClick={onIncrementAsync}>
      Increment after 1 second
        </button>
    <br></br>
    <button style={buttonStyle} onClick={onIncrementLast}>
      Increment last
        </button>

        <br></br>
    <button style={buttonStyle} onClick={onIncrementLeading}>
      Increment leading
        </button>
    <hr />
    <div>
      Clicked: {value} times
        </div>
  </div>

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired
}

export default Counter
