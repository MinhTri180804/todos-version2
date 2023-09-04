import React from "react";
import PropTypes from "prop-types";
import Todo from "./todo";

TodoList.propTypes = {};

function TodoList(props) {
  const root = document.getElementById("root");
  let todoList = [
    {
      id: 0,
      title: "Get up at 6am",
      time: "12:00",
      date: "03/09/2023",
      description: "",
    },

    {
      id: 1,
      title: "Completed task managers",
      time: "11:00",
      date: "03/09/2023",
      description: "",
    },

    {
      id: 2,
      title: "Play soccer in afternoon",
      time: "17:20",
      date: "03/09/2023",
      description: "",
    },

    {
      id: 3,
      title: "Go to school",
      time: "09:00",
      date: "05/09/2023",
      description: "",
    },
  ];

  function handleClickTodo(id) {
    const todo = todoList.find((todo) => {
      return todo.id == id;
    });
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    const overviewTodo = document.createElement("div");
    overviewTodo.classList.add("fixed");
    overviewTodo.classList.add("w-full");
    overviewTodo.classList.add("h-[100%]");
    overviewTodo.classList.add("top-0");
    overviewTodo.classList.add("left-0");
    overviewTodo.classList.add("bg-stone-200/50");
    const html = `
         <div class="fixed w-[90%] min-h-[50%] top-[50%] max-h-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#fff] rounded-[15px]">
            <div class="edit__todo py-[20px] border-b text-3xl">
              <i class="fa-regular fa-pen-to-square"></i>
            </div>
            <div class="title__todo py-[20px] text-2xl font-medium">
              <h4>${todo.title}</h4>
            </div>
            <div class="px-5 h-[200px]">
              <div class="description__todo text-left font-bold">Note :</div>
              <div class="message__note-todo text-left text-[16px] max-h-[70%] overflow-auto">
              ${
                todo.description == ""
                  ? "Không có mô tả chi tiết"
                  : todo.description
              }
              </div>
            </div>
              <div class="px-5 my-[15px]">
                <div class="w-full py-[10px] font-bold text-[16px] bg-[#b9e629] rounded-[15px]">
                  <div class="text-[red]">${todo.date}</div>
                  <div class="text-white">${todo.time}</div>
                </div>
              </div>
            <div class="px-5 pb-5 w-full flex items-center justify-between gap-3">
              <button class="button_completed w-full py-[15px] text-center font-medium text-white text-[18px] rounded-[15px] bg-green-500">Completed</button>
              <button class="button_close w-full py-[15px] text-center font-medium text-white text-[18px] rounded-[15px] bg-gray-500">Close</button>
            </div>
          </div>
    `;
    overviewTodo.innerHTML = html;
    root.appendChild(overviewTodo);

    const buttonClose = document.querySelector(".button_close");
    buttonClose.addEventListener("click", () => {
      root.removeChild(overviewTodo);
      body.style.overflow = "auto";
    });
  }

  return (
    <section className="todo_list">
      <h3 className="title_todoList text-6xl text-black text-left">To-Dos</h3>
      <ul className="list__todo grid grid-cols-2 gap-5 my-[20px]">
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.title}
            time={todo.time}
            date={todo.date}
            id={todo.id}
            selectTodo={handleClickTodo}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
