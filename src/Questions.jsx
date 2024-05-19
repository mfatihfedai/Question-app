import React, { useState, useEffect } from 'react';
import Result from './Result';

function Questions({ questions }) {
    const [currentQuestions, setCurrentQuestion] = useState(0);
    const [showOptions, setShowOptions] = useState(false);
    const [trueResult, setTrueResult] = useState(0);
    const [falseResult, setFalseResult] = useState(0);
    const [remainTime, setRemainTime] = useState(30);
    const [trueAnswers, setTrueAnswers] = useState([]);
    const [falseAnswers, setFalseAnswers] = useState([]);

    useEffect(() => {
        const time = setTimeout(() => {
            setShowOptions(true);
        }, 10000);
        
        return () => setShowOptions(false);

    }, [currentQuestions])

    useEffect(() => {
        const time = setTimeout(() => {
            setCurrentQuestion(prev => prev + 1 );
            setRemainTime(30);
        }, 30000)

        return () => clearTimeout(time);
    }, [currentQuestions, questions]); 

    useEffect(() => {
        if(remainTime > 0){
            const timers = setTimeout(() => {
                setRemainTime(prev => prev - 1);
            }, 1000);
            return () => clearTimeout(timers);
        }
    }, [remainTime])

    useEffect(() => {
        if (currentQuestions < questions.length) {
        document.querySelector('.remain-line').classList.remove('animations');
        setTimeout(() => {
            document.querySelector('.remain-line').classList.add('animations');
        }, 0);
    }
    }, [currentQuestions]);

    const currentQuestion = questions[currentQuestions];

    const choiceFunc = (optionIndex, correctAnswer) => {
        if(currentQuestion.options[optionIndex] === correctAnswer) {
            setTrueResult(trueResult + 1);
            setTrueAnswers(prev => [...prev, currentQuestion.options[optionIndex]]);
        } else {
            setFalseResult(falseResult + 1);
            setFalseAnswers(prev => [...prev, currentQuestion.options[optionIndex]]);
        }        
        setCurrentQuestion(prev => prev + 1 );
        setRemainTime(30);

    }
    return (
        <div>
            {(currentQuestions < questions.length) ? (
                <>
                    <h2>Question {currentQuestion.id}</h2>
                    <div>
                        <div>Remaining Time : {remainTime} seconds</div>
                        <div className='remain-line'></div>
                        <img src={currentQuestion.media} alt="" />
                        <div className='question'>{currentQuestion.question}</div>
                        <div className='answer'>
                            {showOptions && currentQuestion.options.map((option, optionIndex) => (
                                <button onClick={() => choiceFunc(optionIndex, currentQuestion.answer)} key={optionIndex}>
                                    <span className="option-label">{String.fromCharCode(65 + optionIndex)} : </span>
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <Result trueResult={trueResult} falseResult={falseResult} trueAnswer={trueAnswers} falseAnswer={falseAnswers}/>
            )}
        </div>
    );
}

export default Questions;