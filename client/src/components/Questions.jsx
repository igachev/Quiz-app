import { useEffect, useState } from "react"
import { getQuestions } from "../services/questionService"
import Loader from "./Loader"


export default function Questions({
    questions,
    index,
    status,
    dispatch,
    userSelectedAnswer
}) {
    const [btnDisabled,setBtnDisabled] = useState(false)
    let correctAnswer = questions.length > 0 && questions[index].answer;
    let correctAnswerValue = questions.length > 0 && questions[index][correctAnswer];
   
    useEffect(() => {
        getQuestions()
        .then((res) => { 
            dispatch({type: 'getQuestions', payload: res})
        })
        .catch((err) => dispatch({type: 'error', payload: err.message}))
      },[])

   function onUserSelectedAnswer(e) {
    dispatch({type:'selectAnswer', payload: e.target.value})
    setBtnDisabled(true)
   }

   function nextQuestion() {
    dispatch({type:'nextQuestion',payload: correctAnswerValue})
    setBtnDisabled(false)
   }

    return (
        
        <div className="questions">
            {status === 'loading' && <Loader />}
           
           {questions.length > 0 && (
            <>
             <h3>{questions[index].question}</h3>
             <div className="answers">
                 <button disabled={btnDisabled ? true : false} onClick={onUserSelectedAnswer} value={questions[index].A} className={`${userSelectedAnswer ? correctAnswerValue === questions[index].A ? 'correct' : 'wrong' : null}`}>{questions[index].A}</button>
                 <button disabled={btnDisabled ? true : false} onClick={onUserSelectedAnswer} value={questions[index].B} className={`${userSelectedAnswer ? correctAnswerValue === questions[index].B ? 'correct' : 'wrong' : null}`}>{questions[index].B}</button>
                 <button disabled={btnDisabled ? true : false} onClick={onUserSelectedAnswer} value={questions[index].C} className={`${userSelectedAnswer ? correctAnswerValue === questions[index].C ? 'correct' : 'wrong' : null}`}>{questions[index].C}</button>
                 <button disabled={btnDisabled ? true : false} onClick={onUserSelectedAnswer} value={questions[index].D} className={`${userSelectedAnswer ? correctAnswerValue === questions[index].D ? 'correct' : 'wrong' : null}`}>{questions[index].D}</button>
             </div>

             <div>
                <button onClick={nextQuestion} className="next-btn">Next Question</button>
             </div>
            </>
           )}
        </div>
    )
}