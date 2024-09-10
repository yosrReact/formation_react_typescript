import "./App.css"
import Hello from "./components/hello/Hello"
import TaskPage from "./pages/taskPage/TaskPage"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import TeacherRoutes from "./components/teacherRoutes/TeacherRoutes"
import StudentRoutes from "./components/studentRoutes/StudentRoutes"
import { useEffect, useState } from "react"
import { me } from "./services/tasks3.service"
import Login from "./pages/login/Login"
import { User } from "./utils/types"
import { Provider } from "react-redux"
import { UserContext } from "./utils/context"

function App() {
  const token = localStorage.getItem("token")

  const [user, setUser] = useState<User>()

  useEffect(() => {
    const fetchMe = async () => {
      try {
        if (token) {
          const user = await me()
          setUser(user)
          console.log("user: ", user)
        }
      } catch (e) {}
    }
    fetchMe()
  }, [])
  if (token && user?.role === "admin") {
    return (
      <div className="app">
        <UserContext.Provider value={user}>
          <Router>
            <Routes>
              <Route path="" element={<Navigate to="/teachers" replace />} />
              <Route path="/teachers/*" element={<TeacherRoutes />} />
            </Routes>
          </Router>
        </UserContext.Provider>
      </div>
    )
  } else if (token && user?.role === "user") {
    return (
      <div className="app">
        <UserContext.Provider value={user}>
          <Router>
            <Routes>
              <Route path="" element={<Navigate to="/students" replace />} />
              <Route path="/students" element={<StudentRoutes />}>
                <Route path="" element={<Navigate to="hello" replace />} />
                <Route path="hello" element={<Hello />} />
              </Route>
            </Routes>
          </Router>
        </UserContext.Provider>
      </div>
    )
  } else if (!token) {
    return (
      <div className="app">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </Router>
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default App
