function Result({trueResult, falseResult, trueAnswer, falseAnswer}) {
    return (
        <div className="total-view">
            <div className='result-view'>
                All questions answered! <br />
                True Answers : <span className="true-answer">{trueResult}</span>  <br />
                False Answers : <span className="false-answer">{falseResult}</span>
            </div>
            <div className="answer-view">
                <div>
                    <h3>True Answers:</h3>
                    <ul>
                        {trueAnswer.map((answer, index) => (
                            <li className="true-answer" key={index}>{answer}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>False Answers:</h3>
                    <ul>
                        {falseAnswer.map((answer, index) => (
                            <li className="false-answer" key={index}>{answer}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Result;