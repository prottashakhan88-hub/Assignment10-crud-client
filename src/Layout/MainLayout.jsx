import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <div className="mt-4">
          <Outlet />
        </div>
        <Footer></Footer>
      </div>
      <Toaster/>
    </div>
    );
};

export default MainLayout;