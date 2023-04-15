import "./todoList.css";
import { useEffect } from "react";
import * as Icon from "react-bootstrap-icons";

const TodoList = (props) => {
  const showTaskCompleted = (complete, index) => (event) => {
    const { checked } = event.target;
    console.log(checked);
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
    <div className="todolist-main-container">
      {props.todoList.map((element, index) => {
        return (
          <div className="todolist-container">
            <div className="list" key={index}>
              <label className="input-box">
                <input
                  className="checkbox"
                  type="checkbox"
                  name={index}
                  onClick={showTaskCompleted("complete", index)}
                  key={index}
                />
                <span className="task-name">{element.name}</span>
                {element.time ? (
                  <div className="time">
                    <Icon.Alarm className="time-icon" />
                    <div className="list-time">{element.time}</div>
                  </div>
                ) : (
                  <></>
                )}
              </label>
              <div className="list-border">
                <div className="list-content"></div>
                {element.color === "green" ? (
                  <div className="dotOuterBox">
                    <div className="green"></div>
                  </div>
                ) : (
                  <div className="dotOuterBox">
                    {" "}
                    <div
                      className={element.color === "yellow" ? "yellow" : "red"}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
