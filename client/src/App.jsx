import { useEffect, useReducer, useState } from 'react'

import './App.css'
import Header from './components/Header'
import Questions from './components/Questions'
import { getQuestions } from './services/questionService'
import Loader from './components/Loader'

const initialState = {
  questions: [],
  status: 'loading', // ready,error,finished,showQuestions
  index: 0,
  totalPoints: 0,
  secondsRemaining: 10,
  userSelectedAnswer: null,
  showQuestions: false
}

function reducer(state,action) {

    if(action.type === 'showQuestions') {
      return {...state, showQuestions: true}
    }

   else if(action.type === 'getQuestions') {
      return {...state, questions: action.payload, status: 'ready'}
    }

}

function App() {
 
  const [state,dispatch] = useReducer(reducer,initialState)

 

  return (
    <div className='container'>
      <Header dispatch={dispatch} />
      {state.showQuestions === true ? <Questions questions={state.questions} index={state.index} status={state.status} dispatch={dispatch}  /> : null}
    </div>
  )
}

export default App
