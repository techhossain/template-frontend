import React from 'react';
import NavBar from './NavBar';

const Footer = () => {
  return (
    <div>
      <div className="container">
        <footer className="py-3 my-4">
          <NavBar />
          <p className="text-center text-muted">© 2021 KitchenWare, Inc.</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;