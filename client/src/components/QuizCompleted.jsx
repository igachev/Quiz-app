
export default function QuizCompleted({
    totalPoints
}) {

    return (
        <div className="completed-quiz">
            <h3>Quiz Completed</h3>
            <p>Your result is {totalPoints} of 120</p>
            <div>
                <button>Try Again</button>
            </div>
        </div>
    )
}