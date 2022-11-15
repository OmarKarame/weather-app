import './Nav.scss';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
        <Link className="nav__item" to="/">
            Weather
        </Link>

        <Link className="nav__item" to="/todoList">
            Todo List
        </Link>
    </div>
  )
}

export default Nav