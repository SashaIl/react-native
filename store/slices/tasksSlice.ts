import { TaskType } from "@/types/TaskType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const tasksReducer = createSlice({
    name: "tasks",
    initialState: {
        tasks: [] as TaskType[],
    },
    reducers: {
        addTask: (state, action: PayloadAction<TaskType>) => {
            state.tasks.push(action.payload);
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        setInitialTasks: (state, action: PayloadAction<TaskType[]>) => {
            state.tasks = action.payload;
        },
        clear: (state) => {
            state.tasks = [];
        }
    }
});

export const {addTask, deleteTask, setInitialTasks,clear} = tasksReducer.actions;
export default tasksReducer.reducer;