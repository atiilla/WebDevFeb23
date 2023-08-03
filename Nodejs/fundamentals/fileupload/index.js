const http = require('http');
const multer = require('multer') // file upload

// diskstorage
const diskStorage = multer.diskStorage({
    destination:function(req,file,cb){ // cb = call back
        cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        let r = (Math.random() + 1).toString(36).substring(7);
        let newFileName = file.originalname.slice(0,file.originalname.length-4).concat(`_${r}`).concat(file.originalname.slice(file.originalname.length-4))

        //console.log(newFileName)
        
        cb(null,newFileName)
    }
})

const uploader = multer({
    storage:diskStorage
}).single('userimg')

http.createServer(function (request, response) {
    if(request.method ==='POST'){
        uploader(request,response,(err)=>{
            if(!err){
                response.write('File uploaded')
                response.end()
            }else{
                response.write('error')
            }
        })
        
    }else{
        response.write('Send post req')
        response.end()
    }
    
}).listen(3000, () => console.log('running...'))