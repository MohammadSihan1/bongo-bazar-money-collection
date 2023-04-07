import React from 'react';
import Navbar from '../NavBar/Navbar';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';

const Layout = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <div>
                    <Outlet></Outlet>

                </div>
            </div>
        </div>
    );
};

export default Layout;