import { useState } from "react"

function Counter(){
    const [number,setNumber] = useState(0)
  
    return(
        <div className="container text-center">
            <h1 className="display-1">{number}</h1>
            <button className="btn btn-lg btn-primary rounded-0" onClick={()=>setNumber(number+1)}>+</button>
            <button className="btn btn-lg btn-dark rounded-0" onClick={()=>number>=1?setNumber(number-1):null}>-</button>
        </div>
    )
}

export default Counter