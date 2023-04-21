export const showPop=(show)=>{
    return(dispatch)=>{
        dispatch({
            type:'show',
            payload:true
        })
    }
}
export const notShowPop=(show)=>{
    return(dispatch)=>{
        dispatch({
            type:'notShow',
            payload:false
        })
    }
}