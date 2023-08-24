// import abc from 'abc'

import Btn from "./coffee"

// function Button(props){
//   return <button className={`btn btn-${props.color}`}>{props.buttonName}</button>
// }


export default function App() {
  let myStyle = { 'color': 'red', 'background': 'green' }

  function PrintMyName(){
    return <h1>C++ Developer</h1>
  }

  // function Button(props){
  //   return <button className={`btn btn-${props.color}`}>{props.buttonName}</button>
  // }

  return (
    //
    <div>
      <h1>hello world</h1>
      {/* {alert(1)} */}
      <h2 style={myStyle}>Hello friend</h2>
      <p className="alert alert-danger">This is alert</p>
      {
        console.log('Hello world')
      }
      <h1>{5+5}</h1>

      <PrintMyName/>
      <Btn buttonName="c++" color="primary"/>
      <Btn buttonName="python" color="dark"/>
      <Btn buttonName="c" color="success"/>

    </div>
  )
}