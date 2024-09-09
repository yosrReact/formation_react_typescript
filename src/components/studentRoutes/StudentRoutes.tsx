import { Outlet } from "react-router-dom"
import Menu from "../menu/Menu"

type Props = {}

export default function StudentRoutes({}: Props) {
  return (
    <div>
      <Menu role="student" />
      <Outlet />
    </div>
  )
}
