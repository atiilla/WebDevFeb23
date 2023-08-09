// fetch('http://localhost:3000/todos',{
//     method:'POST',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         title:'React.js',
//         task:'Learn front-end technology',
//         time:new Date('2023-09-08T08:48:32.580Z')
//     })
// })
// .then(response=>response.json())
// .then(result=>{
//     console.log(result)
// })

// DELETE ALL
fetch('http://localhost:3000/todos')
.then(res=>res.json())
.then(data=>{
    // console.log(data.todos)
    data.todos.forEach(todo=>{
        console.log(todo._id)
        fetch(`http://localhost:3000/todo/${todo._id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .finally(()=>{
            console.log(`${todo._id} is deleted`)
        })
    })
})