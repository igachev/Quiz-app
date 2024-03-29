import { useEffect, useState } from "react"
import { getQuestions } from "../services/questionService"
import Loader from "./Loader"
import Timer from "./Timer";


export default function Questions({
    questions,
    index,
    status,
    dispatch,
    userSelectedAnswer,
    totalQuestions
}) {
    const [btnDisabled,setBtnDisabled] = useState(false)
    let correctAnswer = questions.length > 0 && questions[index].answer;
    let correctAnswerValue = questions.length > 0 && questions[index][correctAnswer];
    let questionNumber = index + 1;
   
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

   function completeQuiz() {
    dispatch({type: 'completeQuiz'})
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
                {questionNumber < totalQuestions
                ? <button onClick={nextQuestion} className="next-btn">Next Question</button>
                : <button onClick={completeQuiz} className="next-btn">Finish Quiz</button>}
             </div>

             <Timer totalQuestions={totalQuestions} status={status} dispatch={dispatch} />
            </>
           )}
        </div>
    )
}