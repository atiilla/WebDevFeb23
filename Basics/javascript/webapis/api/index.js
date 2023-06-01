const express = require('express');
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(express.urlencoded())

// app.use(cors({
//     origin:"localhost"
// }))
app.use(cors())

app.get('/',(req,res)=>{
    res.json({
        message:'okok'
    })
})

app.listen(3001,()=>console.log('running on 3001'))