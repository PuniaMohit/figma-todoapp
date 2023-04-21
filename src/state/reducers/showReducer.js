// const reducer=(state=0,action)=>{
//     if(action.type==='show'){
//         return action.payload
//     }else if(action.type==='notShow'){
//         return action.payload
//     }else{
//         return state;
//     }
// }

// export default reducer;


const showReducer = (state = true, action) => {
    switch (action.type) {
      case 'SHOW':
        return true;
      case 'HIDE':
        return false;
      default:
        return state;
    }
  };
  
  export default showReducer;