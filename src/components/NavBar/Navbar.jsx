import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className='bg-sky-900 text-white flex justify-between p-4 items-center'>
                <h1 className='text-3xl' >Bongo Bazar Money Collection</h1>
                <div className='flex gap-5'>
                    <Link to="/">Home</Link>
                    <Link to="about">About</Link>
                    <Link to="pay">Payment</Link>
                    <Link to="more">More</Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;