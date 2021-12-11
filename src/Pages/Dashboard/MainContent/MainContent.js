import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

const MainContent = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default MainContent;