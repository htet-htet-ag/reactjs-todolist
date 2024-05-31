import React from "react";

export default function TodoCard(props) {
  const { children, handleDeleteTodo, handleEditTodo, index } = props;
  return (
    <div className="actionContainer">
      <li className="todoItem">
        {children}
        <button onClick={() => handleEditTodo(index)}>
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDeleteTodo(index)}>
          <i class="fa-solid fa-trash"></i>
        </button>
      </li>
    </div>
  );
}
