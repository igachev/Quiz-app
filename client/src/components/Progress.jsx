
export default function Progress({
    totalQuestions,
    questionNumber,
    totalPoints
}) {

    const maxPoints = totalQuestions * 10;

    return (
        <div className="progress">
            <progress value={questionNumber + 1} max={totalQuestions}></progress>
            <p>Question: {questionNumber + 1} / {totalQuestions}</p>
            <p>Points: {totalPoints} / {maxPoints}</p>
        </div>
    )
}