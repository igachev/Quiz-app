
export default function QuizCompleted({
    totalPoints,
    dispatch
}) {

    function reset() {
        dispatch({type: 'reset'})
    }

    return (
        <div className="completed-quiz">
            <h3>Quiz Completed</h3>
            <p>Your result is {totalPoints} of 120</p>
            <div>
                <button onClick={reset} className="btn">Try Again</button>
            </div>
        </div>
    )
}