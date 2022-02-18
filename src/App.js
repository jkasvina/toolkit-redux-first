import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {increment} from "./toolkitRedux/toolkitSlice";
import {decrement} from "./toolkitRedux/toolkitSlice";
import {addToDo, removeLastToDo} from "./toolkitRedux/toolkitSlice";
// npm i react-redux  !!!!
let i = 0;

const addAsyncToDo = () => {
    return async (dispatch) => {
        setTimeout( () => {
            dispatch(addToDo('sdelat` vdoh' + i++))
        }, 2000)
    }
}

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.toolkit.count);
  const todos = useSelector((state) => state.toolkit.todos);

  return (
    <div className="App">
      <div style={{ fontSize: "3rem" }}>Баланс: {count}</div>
      <button onClick={() => dispatch(increment())}> ИНКРЕМЕНТ++ </button>
      <button onClick={() => dispatch(decrement())}> ДЕКРЕМЕНТ-- </button>
      <button onClick={() => dispatch(removeLastToDo())}>Удалить последний ТУДУ</button>
      <button onClick={() => dispatch(addToDo(prompt()))}>Добавить ТУДУ</button>
      <button onClick={() => dispatch(addAsyncToDo())}>Добавить ASYNC ТУДУ</button>
      <ul>
        {todos.map(todo =>
          <li key={todo}>{todo}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
