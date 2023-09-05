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
    <li key={id} className="todo p-[15px] border rounded-[20px] flex flex-col justify-between relative transition-all">
      <div className="edit__todo pb-[10px] border-b">
        <i className="fa-regular fa-pen-to-square"></i>
      </div>
      <div className="title__todo py-[30px] font-bold text-[18px]">
        <h5>{title}</h5>
      </div>

      <div className="todo__date-time w-full rounded-[15px] bg-[#f4f5f6] py-[10px] text-[#b2b8bc] font-bold">
        {date}
      </div>
      <button className="remove__todo z-10 absolute bottom-[-40px] left-0 w-full py-[5px] rounded-[20px] text-center bg-red-500 text-white font-medium hidden"> Remove </button>
      
      <button className="more__todo z-10 absolute bottom-[-80px] left-0 w-full p-[5px] rounded-[20px] text-center bg-green-500 shadow-2xl text-white font-medium hidden"  onClick={handleSelectTodo} > More </button>
    </li>
  );
}

export default Todo;
