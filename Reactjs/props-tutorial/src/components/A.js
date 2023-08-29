import React from 'react'
import B from './B'

function A({welcome,changeText}) {
  return (
    <div>
    <h1>A</h1>
    <B welcome={welcome} changeText={changeText}/>
    </div>
  )
}

export default A