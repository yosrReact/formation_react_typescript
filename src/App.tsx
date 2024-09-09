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
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/teachers/*" element={<TeacherRoutes />} />
          <Route path="/students" element={<StudentRoutes />}>
            <Route path="" element={<Navigate to="hello" replace />} />
            <Route path="hello" element={<Hello />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
