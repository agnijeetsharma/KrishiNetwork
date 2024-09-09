

const AsyncHandler=(requestHandeler)=>{
    return(req,res,next)=> {
        Promise.resolve(requestHandeler).catch((err)=>next(err))
    }

}

export {AsyncHandler}