module.exports={
    encode:function(str){
        let buff = new Buffer(str,'ascii')
        return buff.toString('base64')
    },
    decode:function(str){
        let buff = new Buffer(str,'base64')
        return buff.toString('ascii')
    }
}