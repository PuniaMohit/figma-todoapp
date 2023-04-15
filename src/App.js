import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/header";
import AddTodoPopUp from "./components/AddTodoPopUp/addTodoPopUp";
import TodoList from "./components/TodoList/todoList";

function App() {
  const [showPop, setShowPop] = useState(false);
  const [todoList, setTodoList] = useState([
    {
      name: "Start making a presentation",
      time: "2023-04-14 7:08 pm",
      color: "yellow",
    },
    { name: "Pay for rent", time: "2023-04-15 7:14 pm", color: "yellow" },
    { name: "Buy a milk", time: "2023-04-13 8:20 pm", color: "yellow" },
    {
      name: "Don't forget to pick up Mickeal from school",
      time: "2023-04-13 8:20 pm",
      color: "yellow",
    },
    {
      name: "Buy a chocolate for Charlotte",
      time: "2023-04-13 8:20 pm",
      color: "yellow",
    },
  ]);
  useEffect(() => {}, []);

  return (
    <div className="container">
      <Header setShowPop={setShowPop} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      {showPop ? (
        <AddTodoPopUp
          setShowPop={setShowPop}
          setTodoList={setTodoList}
          todoList={todoList}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
