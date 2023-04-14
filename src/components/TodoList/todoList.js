import "./todoList.css";
import { useEffect } from "react";
import * as Icon from "react-bootstrap-icons";

const TodoList = (props) => {
  const showTaskCompleted = (complete, index) => (event) => {
    const { checked } = event.target;
    const newArr = props.todoList.map((item, i) => {
      if (index === i) {
        return checked
          ? { ...item, color: "green" }
          : { ...item, color: "yellow" };
      } else {
        return item;
      }
    });
    props.setTodoList(newArr);
  };
  useEffect(() => {}, []);

  return (
    <div>
      {props.todoList.map((element, index) => {
        return (
          <div className="todolist-container">
            <li className="list" key={index}>
              <input
                className="checkbox"
                type="checkbox"
                name={index}
                onClick={showTaskCompleted("complete", index)}
                key={index}
              />
              <div className="list-border">
                <div className="list-content">
                  <label htmlFor={index}>{element.name}</label>
                  {element.color === "green" ? (
                    <div className="green"></div>
                  ) : (
                    <div
                      className={element.color === "yellow" ? "yellow" : "red"}
                    ></div>
                  )}
                </div>
                <div className="time">
                  <Icon.Alarm className="time-icon" />
                  <div className="list-time">{element.time}</div>
                </div>
              </div>
            </li>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
