import React from 'react'
import D from './D'

function C({_lol,changeText}) {
  return (
    <div>
    <h1>C</h1>
    <D welcome={_lol} changeText={changeText}/>
    </div>
  )
}

export default C