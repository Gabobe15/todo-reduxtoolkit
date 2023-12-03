import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { updateTodo } from "../features/todo/todoSlice";
// import Todos from "./Todos";

function EditTodo() {
//   const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const todoToEdit = useSelector(state => state.todo.editTodos);

   const [input, setInput] = useState({
     id: todoToEdit.id,
     text: todoToEdit.text,
   });

   const {text} = input

  const handleChange = (e) => {
    setInput({ ...text, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodo(text));
    navigate('/todo')
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="text"
        type="text"
        placeholder="Enter a Todo..."
        value={text}
        onChange={handleChange}
      />
      <button type="submit"> Edit Todo </button>
    </form>
  );
}

export default EditTodo;
