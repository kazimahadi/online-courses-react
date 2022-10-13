import React from 'react';
import Option from '../Option/Option';
import { EyeSlashIcon } from '@heroicons/react/24/solid'

const Questions = ({ posno }) => {
    const { question, options } = posno;
    console.log('posno:', posno);
    const handleShowCorrect = option => {
        if (option === posno.correctAnswer) {
            alert('Correct Answer');
        }
        else {
            alert('Wrong Answer');
        }
    }
    const handleEyeToast = () => {
        alert(`Correct Answer: ${posno.correctAnswer}`);
    }
    return (
        <div className='border mb-3 ml-16 mr-16 shadow-sm p-5'>
            <div className='flex justify-between'>
                <h1 className='pl-10 pt-3 font-bold'>Quiz { }: {question}</h1>
                <button onClick={handleEyeToast}><EyeSlashIcon className="h-6 w-6 text-blue-500" /></button>
            </div>
            {
                posno.options.map(option => <Option
                    option={option}
                    handleShowCorrect={handleShowCorrect}
                ></Option>)
            }
        </div>
    );
};

export default Questions;