import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import Header from '../Header/Header';

const Home = () => {
    const courses = useLoaderData();
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className='grid grid-cols-4 gap-3'>
                {
                    courses.data.map(course => <Courses
                        key={course.id}
                        course={course}
                    ></Courses>)
                }
            </div>
        </div>
    );
};

export default Home;