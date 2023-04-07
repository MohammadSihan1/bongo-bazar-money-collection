import React from 'react';
import Navbar from '../NavBar/Navbar';

const Home = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <div className='flex justify-between items-center'>
                    <img src="/src/assets/images/images (2).jpg" className='w-96 mt-5' alt="Fire image" />
                    <div className='text-5xl'>
                        <h1 className='pt-2'>Over $200 million taka loss </h1>
                        <h1 className='pt-2'>Let's OverCome the loss</h1>
                        <div className='flex justify-center items-center gap-5'>
                            <h1 className='pt-2'>Click Here to read full </h1>
                            <button  className='pt-2 bg-sky-400 hover:bg-sky-600 text-3xl rounded p-2'>More</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Home;