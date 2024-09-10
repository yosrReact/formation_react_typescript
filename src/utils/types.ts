export type TodoItemData = {
  title: string
  duration: number
}

export type TodoItem = {
  _id: string
} & TodoItemData

export type User = {
  firstName: string
  lastName: string
  role: string
}
