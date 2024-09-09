import { useState, useEffect } from "react"
import TaskForm from "../../components/taskForm/TaskForm"
import TasksList from "./../../components/tasksList/TasksList"
import { TodoItem } from "./../../utils/types"
import * as api from "../../services/tasks.service"
function TaskPage() {
  const [isVisible, setIsVisible] = useState(true)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  const [tasks, setTasks] = useState<TodoItem[]>([])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(false)
      try {
        const result = await api.fetchTasks()
        setTasks(result)
        setLoading(false)
      } catch (e) {
        setLoading(false)
        setError(true)
      }
    }

    fetchData()
  }, [])

  const addTask = async (title: string, duration: number) => {
    try {
      setLoading(true)
      const newTask = await api.addTask({
        title,
        duration,
      })
      setTasks([...tasks, newTask])
      setLoading(false)
    } catch (e) {
      console.log("error", e)
    }
  }
  const deleteTask = async (id: string) => {
    try {
      setLoading(true)
      await api.deleteTask(id)
      const newTasks = tasks.filter((task) => task._id !== id)
      setTasks(newTasks)
      setLoading(false)
    } catch (e) {
      console.log("error", e)
    }
  }

  const updateTask = async (id: string, title: string, duration: number) => {
    try {
      setLoading(true)
      const newTask = await api.updateTask(id, {
        title,
        duration,
      })
      const newTasks = tasks.map((task) => (task._id === id ? newTask : task))
      setTasks(newTasks)
      setLoading(false)
    } catch (e) {
      console.log("error", e)
    }
  }

  return (
    <div className="tasks-list">
      {/* 1ère solution */}
      <button onClick={() => toggleVisibility()}>Toggle visibility</button>
      {/* 2ème solution */}
      {/* <button onClick={toggleVisibility}>Toggle visibility</button> */}
      <TaskForm addTask={addTask} />
      {error && <div>Error....</div>}
      {loading ? (
        <div>loading...</div>
      ) : (
        isVisible && (
          <>
            <TasksList
              tasks={tasks}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          </>
        )
      )}
    </div>
  )
}

export default TaskPage
