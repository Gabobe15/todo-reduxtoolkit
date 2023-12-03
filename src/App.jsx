import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"
import Navbar from "./components/Navbar";
import EditTodo from "./components/EditTodo";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route element={<Todos />} path={"/"} />
          <Route element={<AddTodo />} path={"/add-todo"} />
          <Route element={<EditTodo />} path={"/edit-todo"} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
