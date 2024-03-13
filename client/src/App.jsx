import { useEffect, useReducer, useState } from 'react'

import './App.css'
import Header from './components/Header'
import Questions from './components/Questions'
import { getQuestions } from './services/questionService'
import Loader from './components/Loader'
import Error from './components/Error'

const initialState = {
  questions: [],
  status: 'loading', // ready,error,finished,showQuestions
  index: 0,
  totalPoints: 0,
  secondsRemaining: 10,
  userSelectedAnswer: null,
  showQuestions: false,
  errorMessage: ''
}

function reducer(state,action) {

    if(action.type === 'showQuestions') {
      return {...state, showQuestions: true}
    }

   else if(action.type === 'getQuestions') {
      return {...state, questions: action.payload, status: 'ready'}
    }

    else if(action.type === 'error') {
      return {...state, status: 'error',errorMessage: action.payload}
    }

    else if(action.type === 'selectAnswer') {
      return {...state, userSelectedAnswer: action.payload}
    }

    else if(action.type === 'nextQuestion') {
      const correctAnswer = action.payload;
      let points = state.totalPoints;
      const isCorrect = correctAnswer === state.userSelectedAnswer
      
      if(isCorrect) {
        points += 10;
      }
      
      return {...state, index: state.index + 1, totalPoints: points, userSelectedAnswer: null}
    }
}

function App() {
 
  const [state,dispatch] = useReducer(reducer,initialState)

 

  return (
    <div className='container'>
      <Header dispatch={dispatch} />
      {state.status === 'error' && <Error errorMessage={state.errorMessage} />}
      {state.showQuestions === true ? <Questions questions={state.questions} index={state.index} status={state.status} dispatch={dispatch} userSelectedAnswer={state.userSelectedAnswer}  /> : null}
    </div>
  )
}

export default App
