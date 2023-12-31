import React from "react";

type TodoProps = {
  name: string;
  completed: boolean;
  id: string;
};

function Todo(props: TodoProps) {
  return (
    <>
      <li className="todo stack-small">
        <div className="c-cb">
          <input
            id={props.id}
            type="checkbox"
            defaultChecked={props.completed}
          />
          <label className="todo-label" htmlFor={props.id}>
            {props.name}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            編集 <span className="visually-hidden">{props.name}</span>
          </button>
          <button type="button" className="btn btn__danger">
            削除 <span className="visually-hidden">{props.name}</span>
          </button>
        </div>
      </li>
    </>
  );
}

export default Todo;
