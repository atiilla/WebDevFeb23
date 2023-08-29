import Navigation from "./Navigation";

export default function Header({appName,id}){
    // const {webInfo,numbers} = info
    
    return (
        <div className="bg-primary p-3 text-light">
            {/* <h1>{info.appName}</h1>
            <h1>{info.version}</h1> */}
            {console.log(appName,id)}
            {/* <h1>{email}</h1> */}
            <Navigation/>
        </div>
    )
}


const test = [
    {id:1},
    {id:2},
    {id:3}
]


// const webInfo = {
//     appName:"CoffeeShop",
//     version:"0.0.1",
//     email:"info@coffeeshophigh.nl"
// }

// const numbers = [1,2,3,4,5,5,6]
/*

const props = {
    websitetitle:...numbers
}

const props ={
    info:{
        webInfo:{},
        numbers:[]
    }
}

*/