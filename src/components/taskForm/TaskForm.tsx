import { useContext, useState } from "react"
import { UserContext } from "../../utils/context"
interface FormProps {
  addTask: (title: string, duration: number) => void
}
export default function TaskForm(props: FormProps) {
  // props.sayHello()
  const user = useContext(UserContext)
  const [title, setTitle] = useState<string>("")
  const [duration, setDuration] = useState<number>(0)
  const addTask = "Add a task"
  const steps = ["Enter the task title", "Click on add task"]
  const handleAddTask = () => {
    props.addTask(title, duration)
    setTitle("")
  }
  return (
    <div className="task-form">
      Hi {user.firstName}
      <ul>
        {steps.map((step) => (
          <li>{step}</li>
        ))}
      </ul>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name="duration"
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
      />
      <button className="button" onClick={handleAddTask}>
        Add a task
      </button>
    </div>
  )
}
