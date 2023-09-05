import { DataCenter } from "./context"
import { useContext } from "react"

export default function ProfileCard(){
    const username = useContext(DataCenter);
    return(
        <div>
            <h4 style={{"color":"rosybrown"}}>This is child of Profile component</h4>
            <h5>Username is {username}</h5>
        </div>
    )
}