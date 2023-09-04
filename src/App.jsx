import "./App.css";
import AddTodo from "./components/addTodo";
import HeaderComponent from "./components/header";
import OverviewComponent from "./components/overview";
import TodoList from "./components/todolist";
function App() {
  return (
    <>
      <AddTodo />
      <HeaderComponent fullName="Minh Tri" />
      <main>
        <OverviewComponent />
        <TodoList />
      </main>
      
    </>
  );
}

export default App;
