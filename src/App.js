import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Popup from "./components/Popup";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem("todos"));
    return initialValue || [];
  });
  const [todo, setTodo] = useState("");
  const [hideCompleted, setHideCompleted] = useState(false);
  const [toggle, setToggle] = useState({ id: 0, tog: false });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos.length]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos((prev) => [
      { todo, id: Math.random(), completed: false },
      ...prev,
    ]);
    setTodo("");
  };
  const handleCheck = (id) => {
    const newArr = JSON.parse(JSON.stringify(todos));
    newArr.forEach((el) => {
      if (el.id === id) {
        el.completed = !el.completed;
      }
    });
    setTodos(newArr);
  };
  const onCancel = () => {
    if (toggle.tog) {
      setToggle({ id: 0, tog: false });
    }
  };

  return (
    <div
      className="a"
      style={{
        background: toggle.tog ? "#00000040" : "white",
      }}
    >
      <div className="a" onClick={onCancel}>
        <Form
          addTodo={addTodo}
          setTodo={setTodo}
          toggle={toggle}
          todo={todo}
          todos={todos}
        />

        {!!todos.length && (
          <div>
            <div
              className="hidevector"
              style={{
                border:
                  toggle.tog && !hideCompleted ? "1px solid #008594 " : "0px",
                background:
                  toggle.tog && !hideCompleted ? "#bfbfbf" : "#008594",
              }}
            />
            <input
              type="checkbox"
              className="hide"
              onClick={() => setHideCompleted((prev) => !prev)}
              style={{ opacity: toggle.tog && !hideCompleted ? 0 : 1 }}
            />
            <p className="hidetext">Hide completed</p>
          </div>
        )}
        {hideCompleted
          ? todos
              .filter((el) => !el.completed)
              .map((el) => (
                <Todo
                  key={el.id}
                  setToggle={setToggle}
                  toggle={toggle}
                  el={el}
                  handleCheck={handleCheck}
                />
              ))
          : todos.map((el) => (
              <Todo
                key={el.id}
                setToggle={setToggle}
                toggle={toggle}
                el={el}
                handleCheck={handleCheck}
              />
            ))}
      </div>
      {toggle.tog && (
        <Popup
          toggle={toggle}
          todos={todos}
          setTodos={setTodos}
          setToggle={setToggle}
        />
      )}
    </div>
  );
}

export default App;
