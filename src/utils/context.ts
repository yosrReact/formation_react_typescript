import { createContext } from "react"
import { User } from "./types"

export const UserContext = createContext<User>({
  firstName: "",
  lastName: "",
  role: "",
})
