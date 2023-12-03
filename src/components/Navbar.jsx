import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <ul>
            <NavLink to='/' >Todo</NavLink>
            <NavLink to='/add-todo' >Add Todos</NavLink>
        </ul>
    </div>
  )
}

export default Navbar