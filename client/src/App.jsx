import { useEffect, useReducer, useState } from 'react'

import './App.css'
import Header from './components/Header'
import Questions from './components/Questions'
import { getQuestions } from './services/questionService'

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

   else if(action.type === 'getQuestions') {
      return {...state, questions: action.payload}
    }
}

function App() {
 
  const [state,dispatch] = useReducer(reducer,initialState)

  useEffect(() => {
    getQuestions()
    .then((res) => dispatch({type: 'getQuestions', payload: res}))
  },[])

  return (
    <div className='container'>
      <Header dispatch={dispatch} />
      {state.status === 'ready' ? <Questions questions={state.questions} /> : null}
    </div>
  )
}

export default App
