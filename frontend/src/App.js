import "./App.css";
import Navbar from "./Components/Navbar.js";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="todo-app">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
