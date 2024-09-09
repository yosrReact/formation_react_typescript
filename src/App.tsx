import "./App.css"
import Hello from "./components/hello/Hello"
import TaskPage from "./pages/taskPage/TaskPage"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Menu from "./components/menu/Menu"
import TaskDetails from "./pages/taskDetails/TaskDetails"
function App() {
  return (
    <div className="app">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" replace />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
