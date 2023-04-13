import './todoList.css'
import {useEffect} from 'react'

const TodoList=(props)=>{
    const showTaskCompleted = (complete, index) => (event) => {
        const { checked } = event.target;
        const newArr = props.todoList.map((item, i) => {
          if (index === i) {
            return checked
              ? { ...item, [complete]: true }
              : { ...item, [complete]: false };
          } else {
            return item;
          }
        });
       props.setTodoList(newArr);
      };

      useEffect(()=>{
    // props.todoList.map((element,index)=>{
    //     let day = element.time.split(' ')[0]
    //     const selectedDate=new Date(day).getDate()
    //     const hours=element.time.split(' ')[1].split(':')[0]  
    //     console.log(selectedDate)
    //     console.log(hours)
    //     const realDate=new Date().getDate()
    //     const realHours=new Date().getHours()
    //     if(selectedDate==realDate){
    //            if(hours<=12){
    //             return {...element,  color:'yellow'}
    //            }
    //     }else if(selectedDate<realDate && hours>realHours){
    //           return {...element, color:'red'}
    //     }
    //     else if(realDate<selectedDate){
    //         return {...element, color:'green'}
    //     }
        
    //      })
      },[])
    return(<div>
{
props.todoList.map((element, index) => {
return <li key={index}>
  <input
                type="checkbox"
                id={index}
                name={index}
                onClick={showTaskCompleted("complete", index)}
                key={index}
              />
              <label htmlFor={index}>{element.name}</label>
              <span>{element.time}</span>
              {element.complete ? (
                <button className="clickShowButton">Complete</button>
              ) : (
                <div className="if-not-button"></div>
              )}
              {
                element.color==='green'?<div className="green"></div>
                : <div className={element.color==='yellow'?'yellow':'red'}></div>
              }
             
             
</li>
})
}
 </div>)
}

export default TodoList;