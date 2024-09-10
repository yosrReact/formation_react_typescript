import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import * as api from "../../../services/tasks3.service"
import { TodoItem, TodoItemData } from "../../../utils/types"

export interface TasksState {
  list: TodoItem[]
  loading: boolean
  error: boolean
}

const initialState: TasksState = {
  list: [],
  loading: false,
  error: false,
}

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await api.fetchTasks()
  return response
})

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (task: TodoItemData) => {
    const response = await api.addTask(task)
    return response
  }
)
export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id: string) => {
    await api.deleteTask(id)
    return id
  }
)
export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ _id, title, duration }: TodoItem) => {
    const response = await api.updateTask(_id, { title, duration })
    return response
  }
)
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    toggleTodo: (state) => {
      console.log("toggleTodo")
    },
    otherExample: (state, action) => {
      console.log(action)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      .addCase(addTask.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(addTask.fulfilled, (state, action: PayloadAction<TodoItem>) => {
        state.loading = false
        state.list.push(action.payload)
      })
      .addCase(addTask.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      .addCase(deleteTask.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false
        state.list = state.list.filter((task) => task._id !== action.payload)
      })
      .addCase(deleteTask.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      .addCase(updateTask.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(
        updateTask.fulfilled,
        (state, action: PayloadAction<TodoItem>) => {
          state.loading = false
          state.list = state.list.map((task) => {
            if (task._id === action.payload._id) {
              return action.payload
            }
            return task
          })
        }
      )
      .addCase(updateTask.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  },
})
export const { toggleTodo, otherExample } = tasksSlice.actions
export default tasksSlice.reducer
