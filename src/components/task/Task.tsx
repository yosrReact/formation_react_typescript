import "./task.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export default function Task({
  id,
  title,
  duration,
  details,
  deleteTask,
  updateTask,
}: {
  id: string
  title: string
  duration: number
  details?: { level: string }
  deleteTask: (id: string) => void
  updateTask: (id: string, title: string, duration: number) => void
}) {
  const [updateMode, setUpdateMode] = useState(false)
  const [titleToUpdate, setTitleToUpdate] = useState(title)
  const [durationToUpdate, setDurationToUpdate] = useState(duration)
  const handleUpdateTask = () => {
    updateTask(id, titleToUpdate, durationToUpdate)
    setUpdateMode(false)
  }
  function help() {
    return <div>click for help</div>
  }

  const navigate = useNavigate()
  const handleDetails = () => {
    navigate(id)
  }
  return (
    <div className="task" style={{ backgroundColor: "cyan" }}>
      {!updateMode ? (
        <>
          {/* <Link to={`${id}`}> */}
          {/* chemin relative sans le "/" */}
          {/* <Link to={`${id}`}> */}

          <div className="title" onClick={handleDetails}>
            {title}
          </div>

          {/* <div className="title">{title}</div>
          </Link> */}
          <div className="title">{duration}</div>
          <div className="title">{details?.level}</div>

          <div className="actions">
            <button onClick={() => deleteTask(id)}>delete</button>

            <button onClick={() => setUpdateMode(true)}>update</button>
          </div>
          {help()}
        </>
      ) : (
        <div>
          <input
            type="text"
            name="title"
            value={titleToUpdate}
            onChange={(e) => setTitleToUpdate(e.target.value)}
          />
          <input
            type="text"
            name="duration"
            value={durationToUpdate}
            onChange={(e) => setDurationToUpdate(Number(e.target.value))}
          />

          <button className="button" onClick={handleUpdateTask}>
            Update a task
          </button>
        </div>
      )}
    </div>
  )
}

// export default function Task(props) {
//   function help() {
//     return <div>click for help</div>
//   }
//   return (
//     <div className="task" style={{ backgroundColor: "cyan" }}>
//       <div className="title">{props.title}</div>
//       <div className="title">{props.duration}</div>
//       {/* <div className="title">{props.details.level}</div> */}

//       <div className="actions">
//         <span>delete</span>
//         <span>update</span>
//       </div>
//       {help()}
//     </div>
//   )
// }
