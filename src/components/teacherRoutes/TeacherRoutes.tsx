import TaskPage from "./../../pages/taskPage/TaskPage"
import { Navigate, Route, Routes } from "react-router-dom"
import TaskDetails from "./../../pages/taskDetails/TaskDetails"
import Menu from "../menu/Menu"
type Props = {}

function TeacherRoutes({}: Props) {
  return (
    <div>
      <Menu role="teacher" />
      <Routes>
        <Route path="" element={<Navigate to="tasks" replace />} />

        <Route path="tasks" element={<TaskPage />} />
        <Route path="tasks/:id" element={<TaskDetails />} />
      </Routes>
    </div>
  )
}

export default TeacherRoutes
