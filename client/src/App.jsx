import { useEffect, useReducer, useState } from 'react'

import './App.css'
import Header from './components/Header'
import Questions from './components/Questions'
import Error from './components/Error'
import Progress from './components/Progress'
import QuizCompleted from './components/QuizCompleted'

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

    else if(action.type === 'completeQuiz') {
      return {...state, status: 'completed', showQuestions: false, index: 0}
    }

    else if(action.type === 'reset') {
      return {
        ...state,
        status: 'ready',
        index: 0,
        totalPoints: 0,
        secondsRemaining: 10,
        userSelectedAnswer: null,
        showQuestions: true,
        errorMessage: ''
      }
    }
}

function App() {
 
  const [state,dispatch] = useReducer(reducer,initialState)
  const totalQuestions = state.questions.length;
 

  return (
    <div className='container'>
      <Header dispatch={dispatch} status={state.status} displayQuestions={state.showQuestions} />
      {state.status === 'error' && <Error errorMessage={state.errorMessage} />}
      {state.showQuestions === true ? 
      (<>
      <Progress totalQuestions={totalQuestions} questionNumber={state.index} totalPoints={state.totalPoints} />
      <Questions questions={state.questions} totalQuestions={totalQuestions} index={state.index} status={state.status} dispatch={dispatch} userSelectedAnswer={state.userSelectedAnswer}  />
      </>)
       : null}

       {state.status === 'completed' && <QuizCompleted totalPoints={state.totalPoints} dispatch={dispatch} />}
    </div>
  )
}

export default App
