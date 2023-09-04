import React from "react";
import PropTypes from "prop-types";

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  selectTodo : PropTypes.func
};
Todo.defaultProps = {};

function Todo(props) {
  const { title, time, date, id, selectTodo } = props;
  function handleSelectTodo() {
    if(!selectTodo) return;
    selectTodo(id);
  }
  return (
    <li key={id} className="p-[15px] border rounded-[20px] flex flex-col justify-between">
      <div className="edit__todo pb-[10px] border-b">
        <i className="fa-regular fa-pen-to-square"></i>
      </div>
      <div className="title__todo py-[30px] font-bold text-[18px]" onClick={handleSelectTodo}>
        <h5>{title}</h5>
      </div>

      <div className="todo__date-time w-full rounded-[15px] bg-[#f4f5f6] py-[10px] text-[#b2b8bc] font-bold">
        {date}
      </div>

    </li>
  );
}

export default Todo;
