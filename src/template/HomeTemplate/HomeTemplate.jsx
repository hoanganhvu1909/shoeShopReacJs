import React from 'react';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import { Outlet } from 'react-router-dom';

const HomeTemplate = () => {
  // Header ==> nội dung bên trong Header ==> Footer
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
