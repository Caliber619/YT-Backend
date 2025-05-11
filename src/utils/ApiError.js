class APIError extends Error{
    // constructor(){}
    constructor(
        statusCode,
        message= "Something went wrong",
        errors= [],
        statck= ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if(stack){
            this.stack = statck
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {APIError}
// this is to extend error class and handle errors like we handled asynchronous code