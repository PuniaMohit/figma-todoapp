import './App.css';
import {useState, useEffect} from 'react'
import Header from './components/Header/header';
import AddTodoPopUp from './components/AddTodoPopUp/addTodoPopUp';
import TodoList from './components/TodoList/todoList';

function App() {
  const [showPop,setShowPop]=useState(false)
  const [todoList, setTodoList] = useState([
    { name: "one", complete: false,time:'2023-04-14 7:08 pm', color:'yellow'},
    { name: "two", complete: false,time:'2023-04-14 7:14 pm', color:'yellow' },
    { name: "three", complete: false,time:'2023-04-14 8:20 pm', color:'yellow'},
  ]);
  useEffect(() => {
    document.title = "New Todo Added!"
    window.localStorage.setItem("todoList", JSON.stringify(todoList))
    const list=JSON.parse(window.localStorage.getItem("todoList",todoList))
    console.log(list)
    })

  return (
    <div>
      <Header setShowPop={setShowPop}/>
      <TodoList todoList={todoList} setTodoList={setTodoList}/>
      {showPop?<AddTodoPopUp setShowPop={setShowPop} setTodoList={setTodoList} todoList={todoList}/>:<></>}
    </div>
  );
}

export default App;
