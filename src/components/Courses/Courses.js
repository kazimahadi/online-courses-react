import React from 'react';
import { Link } from 'react-router-dom';

const Courses = ({ course }) => {
    const { name, logo, total, id } = course;
    return (
        <div className='m-12 border border-rounded border-sky-100 shadow-xl p-2'>
            <img className='h-52 bg-sky-200 ' src={logo} alt="" />
            <h2 className='font-bold mt-3'>{name}</h2>
            <h2>Total Quiz: {total}</h2>
            <Link to={`courses/${id}`}>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3'>Start Practice</button>
            </Link>
        </div>
    );
};

export default Courses;