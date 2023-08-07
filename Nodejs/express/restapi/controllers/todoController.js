const axios = require('axios').default
// npm install axios

const getTodos = async ()=>{
    let response = await axios.get('https://jsonplaceholder.typicode.com/todos') // send get request to jsonplaceholder
    let todosJson = await response.data // retrieve json data
    return todosJson // return the data
}

const getTodo = async (id)=>{
    let response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    return response
}

const todos = async (req,res)=>{
    let data = await getTodos()
    // console.log(data)
    res.json({
        msg:'ok',
        todos:data
    })
}

const todoDetail = (req,res,)=>{
    const {id} = req.params
    getTodo(id)
    .then(json=>{
        res.json({
            msg:'ok',
            todo:json.data
        })
    })
    .catch(err=>{
        res.status(404).json({
            msg:'Todo not found!'
        })
    })
  
}


module.exports={
    todosController:todos,
    todoController:todoDetail
}