import { useState, useEffect } from "react"
import TaskForm from "../../components/taskForm/TaskForm"
import TasksList from "./../../components/tasksList/TasksList"
import { useDispatch } from "react-redux"
// import { fetchTasks } from "./../../redux/actions/tasks.actions"
import { useSelector } from "react-redux"
import {
  fetchTasks,
  addTask as addTaskFormRedux,
  updateTask as updateTaskFromRedux,
  deleteTask as deleteTaskFromRedux,
  toggleTodo,
} from "../../redux/features/tasks/tasksSlice"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"

function TaskPage() {
  const [isVisible, setIsVisible] = useState(true)
  const dispatch = useAppDispatch()
  const tasks = useAppSelector((store) => store.tasks)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    dispatch(fetchTasks())
    dispatch(toggleTodo())
  }, [])

  const addTask = async (title: string, duration: number) => {
    dispatch(addTaskFormRedux({ title, duration }))
  }
  const deleteTask = async (id: string) => {
    dispatch(deleteTaskFromRedux(id))
  }

  const updateTask = async (id: string, title: string, duration: number) => {
    dispatch(updateTaskFromRedux({ _id: id, title, duration }))
  }
  return (
    <div className="tasks-list">
      {/* 1ère solution */}
      <button onClick={() => toggleVisibility()}>Toggle visibility</button>
      {/* 2ème solution */}
      {/* <button onClick={toggleVisibility}>Toggle visibility</button> */}
      <TaskForm addTask={addTask} />
      {tasks.error && <div>Error....</div>}
      {tasks.loading ? (
        <div>loading...</div>
      ) : (
        isVisible && (
          <>
            <TasksList
              tasks={tasks.list}
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
