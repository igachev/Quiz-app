import { useEffect } from "react"
import { getQuestions } from "../services/questionService"
import Loader from "./Loader"

export default function Questions({
    questions,
    index,
    status,
    dispatch
}) {
   
    useEffect(() => {
        getQuestions()
        .then((res) => dispatch({type: 'getQuestions', payload: res}))
      },[])

    return (
        
        <div className="questions">
            {status === 'loading' && <Loader />}
           {questions.length > 0 && (
            <>
             <h3>{questions[index].question}</h3>
             <div className="answers">
                 <button>{questions[index].A}</button>
                 <button>{questions[index].B}</button>
                 <button>{questions[index].C}</button>
                 <button>{questions[index].D}</button>
             </div>
            </>
           )}
        </div>
    )
}