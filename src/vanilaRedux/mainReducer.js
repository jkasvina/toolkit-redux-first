const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_TODO = "ADD_TODO";
const REMOVE_LAST_TODO = "REMOVE_LAST_TODO";

const initialState = {
  count: 0,
  todos: ["makeup", "clean boots", "wright project"]
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    // изначально состояние является неизменяемым,
    // поэтому новое состояние - всегда новый объект
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case ADD_TODO:
      console.log(action.payload)
      return { ...state, todos: [...state.todos, action.payload] };
    case REMOVE_LAST_TODO: {
      let arr = [...state.todos];
      arr.pop();
      return { ...state, todos: arr };
    }
    default:
      return state;
    // возвращаем неизменённое текущее состояние
  }
}

// такая ф-я называется action creator
// принимает данные и возвращает объект action
// нужна чтобы не писать объекты, а просто вызывать функцию по имени action-а
// type - обязательное поле
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const addToDo = (payload) => ({ type: ADD_TODO, payload });
export const removeLastToDo = () => ({ type: REMOVE_LAST_TODO });
