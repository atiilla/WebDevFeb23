// import { useState } from "react";
// import Category from "./Category";
// import Profile from "./Profile";
// import { DataCenter } from "./context";
// import { CategoriesContext } from "./context/categories";

import { AuthProvider } from "./AuthProvider";
import Test from "./Test";



// export default function App() {
//     const [state,setState] = useState("michaeljordan");

//     const changeUsername=(username)=>{
//         setState(username)
//     }

//     // let username = "r00t"
//     // let number = 10;
//     // let isLoggedIn = false;
//     // let obj = {
//     //     drink: 'coffee'
//     // }
//     // let users = ['archana,viktor,khalid']
//     // let printName = name => {
//     //     alert(name)
//     // }

//     return (
//         <>
//             <DataCenter.Provider value={{state,changeUsername}}>
//                 <div>
//                     <h1>Top-Level Component</h1>
//                     <h2>{`->`} Child Components</h2>
//                     <Category />
//                 </div>

//             </DataCenter.Provider>
//             {/* <CategoriesContext.Provider value={'Thriller'}>
//                 <Profile />
//             </CategoriesContext.Provider> */}

//         </>
//     )
// }


export default function App(){

    return(
        <AuthProvider>
            <div>
               <Test/>
                {/* <button onClick={()=>changeUsername("r00t")}>Change Username</button> */}
            </div>
        </AuthProvider>
    )
}