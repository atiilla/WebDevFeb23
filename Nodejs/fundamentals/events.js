const EventEmitter = require('events');

const chatEmitter = new EventEmitter();

// Register an event
chatEmitter.on('join',()=>{
    console.log('User joined chat')
})
chatEmitter.on('join',()=>{
    console.log('User joined chat')
})
chatEmitter.on('join',()=>{
    console.log('User joined chat')
})
chatEmitter.on('join',()=>{
    console.log('User joined chat')
})
chatEmitter.addListener('disconnect',()=>{
    console.log('User left the chat')
})

chatEmitter.on('error',()=>{
    console.log('Max Listeners:2')
})

chatEmitter.addListener('typing',(obj)=>{
    console.log('User sent: ',obj)
})

chatEmitter.setMaxListeners(3)


// Raise event

chatEmitter.emit('disconnect')
chatEmitter.emit('typing',{message:'hello'}) // call event with param

console.log(chatEmitter.getMaxListeners())
// console.log(chatEmitter.listenerCount("join"))

if(chatEmitter.listenerCount('join')<=chatEmitter.getMaxListeners()){
    chatEmitter.emit('join')
}else{
    chatEmitter.emit('error')
}
