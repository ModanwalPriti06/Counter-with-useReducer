import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';

const App = () => {
const [state,dispatch] = useReducer(counterReducer,);
  return (
    <div id="main">
     
    </div>
  )
}


export default App;
