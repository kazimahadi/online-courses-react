import React from 'react';

const Option = ({ option, handleShowCorrect }) => {
    return (
        <div className=''>
            <button onClick={() => handleShowCorrect(option)}><input type="checkbox" className=" ml-16" />{option}</button>
        </div>
    );
};

export default Option;