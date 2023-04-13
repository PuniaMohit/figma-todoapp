import { useState } from "react";
const AddTodoPopUp = (props) => {
    const [input, setInput] = useState("");
    const [dateAndTime, setDateAndTime] = useState("")
    const [isError, setIsError] = useState(false)
    const updateTime = (event) => {
        const arrDateAndTime=event.target.value.split('T')
        let day = event.target.value.split('T')[0]
        const hours = arrDateAndTime[1].split(':')[0]
        const minutes = arrDateAndTime[1].split(':')[1]
        const suffix = hours >= 12 ? 'pm' : 'am'
        const showHours = hours > 12 ? hours - 12 : hours;
        const time = showHours + ":" + minutes + " " + suffix
        const dateAndTim = day + " " + time
        const selectedDate=new Date(day).getDate()
        const realDate=new Date().getDate()
        const realHours=new Date().getHours()
        const realMinutes=new Date().getMinutes()
        if (realDate > selectedDate) {
            setIsError(true)
        }
        else if(realDate == selectedDate){
                 if(hours < realHours){
                    setIsError(true)
                 }else if(hours==realHours){
                    if(minutes<realMinutes){
                        setIsError(true)
                    }else{
                        setIsError(false)
                    }
                 }else{
                    setIsError(false)
                }
        }
        // else if(realDate<selectedDate){
        //     setIsError(false)
        // }
        // else if (hours < realHours) {
        //     setIsError(true)
        //   }
        // else if ( minutes < realMinutes){
        //     setIsError(true)
        // }
         else {
            setIsError(false)
        }
        setDateAndTime(dateAndTim)
    }
    const updateTodo = () => {
        props.setShowPop(false)
        props.setTodoList([...props.todoList, { name: input, complete: false, time: dateAndTime }])
        //     const am_pm = new Date().getHours() >= 12 ? "PM" : "AM";
        //     let hours = new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours();
        //      hours= hours < 10 ? "0" + hours : hours;
        //    const minutes =new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes();
        //    const time= hours+':'+minutes+" "+am_pm
        //    props.setTodoList([...props.todoList,{name:input, complete:false, time:time}])
    }
    return (<div><input onChange={
        (event) => { setInput(event.target.value) }} />
        {isError ? <>error</> : <></>}
        <input type="datetime-local" onChange={updateTime}></input>
        {isError ? <></> :
            <button onClick={updateTodo}>add</button>}</div>
    )
}

export default AddTodoPopUp;