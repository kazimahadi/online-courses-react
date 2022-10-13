import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quiz = useLoaderData();
    const { name } = quiz.data;
    const questions = quiz.data.questions;
    return (
        <div>
            <h1 className='font-bold text-2xl text-center mt-5 text-cyan-600 mb-3'>Quiz of {name}</h1>
            {
                questions.map(question => <Questions
                    key={question.id}
                    posno={question}
                ></Questions>)
            }
        </div>
    );
};

export default Quiz;