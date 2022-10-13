import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='shadow-xl '>
            <div className='flex ml-16 mr-16 mt-5 p-5 font-bold justify-between'>
                <div className='text-cyan-600 text-2xl' >
                    <h2>Coach Online Courses</h2>
                </div>
                <div >
                    <nav className='text-cyan-300'>
                        <Link className='mr-5' to='/'>Home</Link>
                        <Link className='mr-5' to='/topics'>Topics</Link>
                        <Link className='mr-5' to='/statistic'>Statistic</Link>
                        <Link to='/blog'>Blog</Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;