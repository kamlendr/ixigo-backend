
class Err extends Error{
    constructor(statusCode,message){
        super()
        this.errInfo=message
        this.statusCode=statusCode
    }
}

module.exports=Err