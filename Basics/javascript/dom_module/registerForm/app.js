const baseUrl = "http://localhost:3000/db"; // backend url
const [email,password,address,address2,city,zipCode] = document.querySelectorAll('input') // all input elements
const RegBtn = document.querySelector('.btn-primary') // register button

RegBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    // alert(1)
    const obj={
        email:email.value,
        password:password.value,
        address:address.value,
        address2:address2.value,
        city:city.value,
        zipCode:zipCode.value
    }

    fetch(baseUrl,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(obj)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data,'saved')
    })
})

