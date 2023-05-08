// <li class="list-group-item">Item</li>
const Output = document.getElementById('users');

const usersList = ['Joe','Jack','Jackie','Michael','Leslie']

// Output.innerHTML=`<li class="list-group-item">Blabla</li>`

// for(let i =0;i<usersList.length;i++){
//     console.log(usersList[i])
//     Output.innerHTML+=`<li class="list-group-item">${usersList[i]}</li>`
// }

const AllH1 = document.querySelectorAll('.output')

for(let i=0; i<AllH1.length;i++){
    console.log(AllH1[i])
    AllH1[i].innerText=`Blabla${i}`
}

let number = 100;
