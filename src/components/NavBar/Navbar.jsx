import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';

const Navbar = () => {
    return (
        <>
            <div className=''>
                <nav className='bg-sky-900 text-white flex justify-between p-4 items-center hover:bg-sky-700 hover:text-slate-100 w-full'>
                    <h1 className='text-3xl' >Bongo Bazar Money Donation</h1>
                    <div className='flex gap-5 '>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/pay">Payment</Link>
                        
                    </div>

                </nav>
            </div>
        </>
    );
};

export default Navbar;