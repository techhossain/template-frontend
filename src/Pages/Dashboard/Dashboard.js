import React from 'react';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
import SideNav from './SideNav/SideNav';

const Dashboard = () => {

  return (
    <>

      <Header />
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 text-start">
            <MainContent />
          </main>
        </div>
      </div>

    </>
  );
};

export default Dashboard;