import { DataCenter } from "./context"
import { useContext, useState } from "react"

export default function Category(){
    const values = useContext(DataCenter)
    const [newuser,setNewUser] = useState("")
    // const user = values[0]
    return (
        <>
            {/* <h4>Category: {state}</h4> */}
            {/* {
                console.log(typeof user, values.state)
            } */}
            <input type="text" onChange={(e)=>setNewUser(e.target.value)} />
            <h1>username is {values.state}</h1>
            <button onClick={()=>values.changeUsername(newuser)}>Change Username</button>
        </>
    )
}