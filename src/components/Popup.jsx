import React from "react";
import "./Popup.css";
const Popup = ({ toggle, todos, setTodos, setToggle }) => {
  const onYes = () => {
    const newArr = todos.filter((el) => el.id !== toggle.id);
    setTodos(newArr);
    setToggle({ tog: false });
  };
  const onIgnore = () => {
    setToggle({ tog: false });
  };
  return (
    <div className="toggle">
      <p className="sure">Are you sure you want to delete?</p>
      <p className="yes" onClick={onYes}>
        Yes
      </p>
      <p className="no" onClick={onIgnore}>
        No
      </p>
    </div>
  );
};

export default Popup;
