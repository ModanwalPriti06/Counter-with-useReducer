import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';

const App = () => {
const [state,dispatch] = useReducer(counterReducer,);
  return (
    <div id="main">
     <span id="counter">{state.count}</span>
      <button id="increment-btn" onClick={()=>dispatch({type"increment})}>increment</button>
     <button id="decrement-btn" onClick={()=>dispatch({type"decrement})}>decrement</button>
    </div>
  )
}


export default App;
