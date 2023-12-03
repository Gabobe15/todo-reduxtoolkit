import { useSelector  } from 'react-redux/es/hooks/useSelector'
import { removeTodo, editTodo } from '../features/todo/todoSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

function Todos() {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const todos = useSelector(state => state.todo.todos)
  console.log(todos);
    function handleEditTodo(p) {
      dispatch(editTodo(p));
      navigate("/edit-todo");
    }

        const todoList = todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.text}</td>
            <td>
              <button
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  handleEditTodo(todo);
                }}
              >
                Edit
              </button>
            </td>
          </tr>
        ));

  return (
    <div>
          <h2>Todos list</h2>
          <table border="1">
            <thead>
              <tr>
                <th colSpan="2">Name</th>
              </tr>
            </thead>
            <tbody>{todoList}</tbody>
          </table>
    </div>
  );
}

export default Todos
