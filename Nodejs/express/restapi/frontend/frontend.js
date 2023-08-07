fetch('http://localhost:8080/todos/')
.then(res=>res.json())
.then(data=>{
    console.log(data)
})