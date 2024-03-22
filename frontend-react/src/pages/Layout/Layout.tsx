import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Outlet} from 'react-router-dom';

function Layout() {
    return (
        <>
            <Header />
            <div className="min-h-[90vh]">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Layout;
