
export default function GameOver({
    dispatch
}) {

    function reset() {
        dispatch({type: 'reset'})
    }

    return (
        <div className="game-over">
            <h3>Game Over!</h3>
            <p>Time is up.You should respond faster to the questions.</p>
            <button onClick={reset} className="game-over-btn">Try Again</button>
        </div>
    )
    
}