
export default function Header({
    dispatch
}) {

    function showQuestions() {
        dispatch({type: 'showQuestions'})
    }

    return (
        <div className="header">
            <h1>Welcome to Quiz App!</h1>
            <h3>try your best to figure out the correct answers to our questions</h3>

            <div>
                <button onClick={showQuestions}>Start The Quiz</button>
            </div>

        </div>
    )
}