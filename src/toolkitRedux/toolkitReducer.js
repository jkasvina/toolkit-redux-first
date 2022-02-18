import {createAction, createReducer} from '@reduxjs/toolkit'

const initialState = {
    count: 0,
    todos: ["makeup", "clean boots", "wright project"]
}

export const increment = createAction("INCREMENT")
export const decrement = createAction("DECREMENT")

export default createReducer (initialState, {
    // синтаксис EcmaScript6
    [increment]: function (state) {
        state.count++;
    },
    [decrement]: function (state) {
        state.count--;
    }
})

console.log(decrement)