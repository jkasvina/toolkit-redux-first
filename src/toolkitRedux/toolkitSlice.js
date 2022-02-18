import {createSlice} from "@reduxjs/toolkit";

// Slice - reducer в упрощённом синтаксисе
const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        count: 0,
        todos: ["makeup", "clean boots", "wright project"]
    },
    reducers: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
        addToDo(state, action) {
            state.todos.push(action.payload)
        },
        removeLastToDo(state) {
            state.todos.pop()
        }
    }
})

export default toolkitSlice.reducer
export const {increment, decrement, addToDo, removeLastToDo} = toolkitSlice.actions