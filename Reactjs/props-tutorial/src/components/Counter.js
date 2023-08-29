import React from 'react'
import { Button } from 'react-bootstrap'

function Counter({count,increaseClick}) {
  return (
    <div>
    <h1>{count}</h1>
        <Button variant='danger' onClick={increaseClick}>Increase Number</Button>
    </div>
  )
}

export default Counter