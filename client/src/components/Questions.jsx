
export default function Questions({
    questions,
    index
}) {
    console.log(questions)
    return (
        <div className="questions">
            <h3>{questions[index].question}</h3>
            <div className="answers">
                <button>{questions[index].A}</button>
                <button>{questions[index].B}</button>
                <button>{questions[index].C}</button>
                <button>{questions[index].D}</button>
            </div>
        </div>
    )
}