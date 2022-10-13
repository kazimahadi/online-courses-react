import React from 'react';
import logo from '../../header.png';

const Header = () => {
    return (
        <div className='flex bg-pink-50 mt-5'>
            <div className='m-12'>
                <h1 className='text-5xl font-bold mb-5'>SUCCESS DOESN’T COME TO YOU, YOU GO TO IT</h1>
                <p className='text-gray-500'>If you are not willing to risk the usual, you will have to settle for the ordinary. I’m here to help and share my story.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-12">
                    Get Free Session
                </button>
            </div>
            <div className='w-1/2'>
                <img src={logo} alt="" />
            </div>

        </div>
    );
};

export default Header;