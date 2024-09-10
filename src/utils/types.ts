export type TodoItemData = {
  title: string
  duration: number
}

export type TodoItem = {
  _id: string
} & TodoItemData
