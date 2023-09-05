import ProfileCard from "./Profile.Card"
import { DataCenter } from "./context"
import { useContext } from "react"
import { CategoriesContext } from "./context/categories"

export default function Profile(){
    const values = useContext(DataCenter)
    const category = useContext(CategoriesContext)
    return(
        <div>
        {
            console.log(values)
        }
            <h2 style={{"color":"red"}}>Profile Component</h2>
            <ProfileCard/>
            <h3>{category}</h3>
        </div>
    )
}