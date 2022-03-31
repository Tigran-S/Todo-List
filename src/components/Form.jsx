import React from "react";
import "./Form.css";

const Form = ({ addTodo, setTodo, toggle, todo, todos }) => {
  return (
    <div>
      <form onSubmit={addTodo}>
        <h5 className="task">Task</h5>
        <input
          className="rectangle1"
          placeholder="Write here"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          style={{
            background: toggle.tog ? "#00000000" : "white",
            outlineColor: todo.length > 54 ? "#ff3104" : "#ffcd04",
          }}
        />
        {todo.length > 54 && (
          <p className="maxcharacters">
            Task content can contain max 54 characters.
          </p>
        )}
        <button className="rectangle2" disabled={todo.length > 54}>
          <h4 className="add">Add</h4>
        </button>
        {!todos.length && (
          <div>
            <p className="life">Your life is a blank page. You write on it.</p>
            <p className="addtask"> So start by adding your tasks here.</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
