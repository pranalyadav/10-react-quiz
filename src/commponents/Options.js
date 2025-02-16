import React from 'react'

export default function Options({ question, dispatch, answer }) {
    const hasAnswer = answer !== null
    return (
        <div>
            <div className='options'>
                {question.options.map((option, index) =>
                    <button
                        className={`btn btn-option ${index === answer ? 'answer' : ''} 
                        ${hasAnswer
                                ? index === question.correctOption
                                    ? "correct"
                                    : "wrong"
                                : ""}`}
                        key={option}
                        disabled={hasAnswer}
                        onClick={() => dispatch({ type: 'newAnswer', payload: index })}
                    >
                        {option}
                    </button>
                )}
            </div>
        </div>
    )
}
