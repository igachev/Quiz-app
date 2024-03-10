import { useReducer, useState } from 'react'

import './App.css'
import Header from './components/Header'
import Questions from './components/Questions'

const initialState = {
  questions: [],
  status: 'loading', // ready,error,finished,showQuestions
  index: 0,
  totalPoints: 0,
  secondsRemaining: 10,
  userSelectedAnswer: null
}

function reducer(state,action) {

    if(action.type === 'showQuestions') {
      return {...state, status: 'ready'}
    }

    
}

function App() {
 
  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div className='container'>
      <Header dispatch={dispatch} />
      {state.status === 'ready' ? <Questions /> : null}
    </div>
  )
}

export default App
