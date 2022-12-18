import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const initialState={count:0};
function counterReducer (state,action){
  switch(action.type){
    case  "increment":
      return {count: state.count+1};
      case  "decrement":
      return {count: state.count-1};
  }
}
const App = () => {
const [state,dispatch] = useReducer(counterReducer,initalState);
  return (
    <div id="main">
      <span>Count: {state.count};</span>
      <button id="btn-increment" onClick={()=>dispatch({type: "increment"})}>+</button>
      <button id="btn-decrement" onClick={()=>dispatch({type: "decrement"})}>-</button>
    </div>
  )
}


export default App;
