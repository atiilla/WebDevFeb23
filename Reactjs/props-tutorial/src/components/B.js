import React from 'react'
import C from './C'

function B({welcome,changeText}) {
  return (
    <div>
        <h1>B</h1>
        <C _lol={welcome} changeText={changeText}/>
    </div>
  )
}

export default B