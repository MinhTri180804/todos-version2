import { useEffect, useState } from "react";
import "./App.css";
import todoApi from "./api/todoApi";
import AddTodo from "./components/addTodo";
import HeaderComponent from "./components/header";
import OverviewComponent from "./components/overview";
import TodoList from "./components/todolist";
function App() {
  const[todoList, setTodoList] = useState([]);
useEffect(() => {
    const fetchTodoList = async () => {
      const response = await todoApi.getAll();
      setTodoList(response);
    }

    fetchTodoList();
  }, [])
  return (
    <>
      <AddTodo />
      <HeaderComponent fullName="Minh Tri" />
      <main>
        <OverviewComponent />
        <TodoList todoList={todoList}/>
      </main>
      
    </>
  );
}

export default App;
