// import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
function Menu({ role }: { role: string }) {
  const customStyle = {
    color: "red",
  }
  if (role === "teacher") {
    return (
      <ul>
        <li>
          <NavLink
            to="/teachers/tasks"
            style={({ isActive }) => (isActive ? customStyle : undefined)}
          >
            My tasks
          </NavLink>

          {/* <Link to="/tasks"> My tasks</Link> */}
        </li>
      </ul>
    )
  } else if (role === "student") {
    return (
      <ul>
        <li>
          <NavLink
            to="/students/hello"
            style={({ isActive }) => (isActive ? customStyle : undefined)}
          >
            Home
          </NavLink>{" "}
          {/* <Link to="/hello">Home</Link> */}
        </li>
      </ul>
    )
  } else {
    return <div>no role defined</div>
  }
}

export default Menu
