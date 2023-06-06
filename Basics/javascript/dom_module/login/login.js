const inputs = document.querySelectorAll('input')
const loginObj = {}
// document.addEventListener('keyup', (e) => {
//     loginObj.username = username.value
//     loginObj.password = password.value
//     console.log(loginObj)
// })

inputs.forEach(input=>{
    input.addEventListener('change',(e)=>{
        loginObj[e.target.name] = e.target.value
        console.log(loginObj)
    })
})