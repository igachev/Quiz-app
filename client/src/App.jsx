import { useReducer, useState } from 'react'

import './App.css'
import Header from './components/Header'

const initialState = {
  questions: [],
  status: 'loading', // ready,error,finished
  index: 0,
  totalPoints: 0,
  secondsRemaining: 10,
  userSelectedAnswer: null
}

function reducer(state,action) {

}

function App() {
 
  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div className='container'>
      <Header />
    </div>
  )
}

export default App
