import React from 'react';
import Header from './components/Navbar';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main className=' min-h-[64vh] max-sm:w-[100vw]'>{children}</main>
        </div>
    );
};

export default Layout;