const loggerMiddleWare = (store)=>(next)=>(action)=>{
    console.log("state before action",action,"was",store.getState())
    return next(action)
}

export default loggerMiddleWare;