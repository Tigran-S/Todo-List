import React from "react";
import "./Todo.css";

const Todo = ({ toggle, el, setToggle, handleCheck }) => {
  return (
    <div>
      <div className="todo">
        <div
          className="vector"
          style={{
            border: toggle.tog && !el.completed ? "1px solid #008594 " : "0px",
            background: toggle.tog && !el.completed ? "#bfbfbf" : "#008594",
          }}
        />
        <input
          checked={el.completed}
          type="checkbox"
          className="checkbox"
          onChange={() => handleCheck(el.id)}
          style={{ opacity: toggle.tog && !el.completed ? 0 : 1 }}
        />

        <p
          className="todo-text"
          style={{
            color: el.completed ? "#ACACAC" : "#666666",
          }}
        >
          {el.todo}
        </p>
        <p
          className="delete"
          onClick={() => setToggle({ id: el.id, tog: true })}
        >
          X
        </p>
      </div>
    </div>
  );
};

export default Todo;
