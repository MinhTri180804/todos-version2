import React from "react";
import PropTypes from "prop-types";
import Todo from "./todo";
import { list } from "postcss";

TodoList.propTypes = {
  todoList: PropTypes.array,
};

TodoList.defaultProps = {
  todoList: [],
}

function TodoList(props) {
  const { todoList } = props;
  const root = document.getElementById("root");

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

  let timer;
  const listTodo = document.querySelectorAll("li.todo");
  listTodo.forEach((todo) => {
    todo.addEventListener("touchstart", (event) => {
      event.preventDefault();
      timer = setTimeout(() => {
        listTodo.forEach((todoBlur) => {
          todoBlur.style.filter = "blur(2px)";
          todoBlur.style.zIndex = "0.5";
          todoBlur.classList.remove('active');
        });
        todo.classList.add('active');
      }, 300);

      todo.addEventListener("touchstart", function () {
        todo.classList.remove('active');
        listTodo.forEach((todoBlur) => {
          todoBlur.style.filter = "blur(0px)";
          todoBlur.classList.remove('active');
        });
      });
    });

    todo.addEventListener("touchend", function () {
      clearTimeout(timer);
    });

    const outTodo = document.querySelector(".list__todo");
    outTodo.addEventListener('click', () => {
      listTodo.forEach((todoBlur) => {
        todoBlur.style.filter = "blur(0px)";
        todoBlur.classList.remove('active');
      });
    })
  });
  
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
