import { useEffect, useState } from "react"
import { fetchTaskById } from "../../services/tasks.service"
import { useParams } from "react-router-dom"
import { TodoItem } from "./../../utils/types"
type ParamTypes = {
  id: string
}
function TaskDetails() {
  const [task, setTask] = useState<TodoItem>()

  const { id } = useParams<ParamTypes>() || { id: "" }
  console.log("useParams(): ", useParams())

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchTaskById(id!)
        setTask(result)
      } catch (e) {}
    }
    fetchData()
  }, [id])

  return (
    <div className="task-details">
      <h1>Task details</h1>
      <div>
        <b>Title:</b> {task?.title}
      </div>
    </div>
  )
}

export default TaskDetails
