import Task from "./../task/Task"
import { TodoItem } from "./../../utils/types"

export default function TasksList(props: {
  tasks: TodoItem[]
  deleteTask: (id: string) => void
  updateTask: (id: string, title: string, duration: number) => void
}) {
  return (
    <div className="tasks-list">
      {props.tasks.map((task) => (
        <Task
          key={task._id}
          id={task._id}
          title={task.title}
          duration={task.duration}
          deleteTask={props.deleteTask}
          updateTask={props.updateTask}
        />
      ))}
    </div>
  )
}
