import React, { useReducer } from 'react';
import './App.css';
import Clock from './components/Clock/Clock';


interface initialState { count: number}

type action = { type: 'INCREMENT' | 'DECREMENT'}


const initialState: initialState = {
  count: 1
}

function reducer(state: initialState, action: action): initialState {

  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
      case 'DECREMENT':
        return {
          count: state.count - 1
        }
    default:
      return state
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <header className="App-header">
       <Clock/>
      { state.count}
      <button
      onClick={()=> dispatch({type: 'INCREMENT'})}
      >
        aumentar
      </button>
      <button
      onClick={() => dispatch({type:'DECREMENT'})}
      > 
        diminuir
      </button>
      </header>
    </div>
  );
}

export default App;
