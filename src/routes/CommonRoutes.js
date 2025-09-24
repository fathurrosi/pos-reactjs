import React from 'react';
import PrivateRoutes from 'routes/PrivateRoutes';
import Home from 'pages/Home';
import Login from 'pages/Login';
import { Routes, Route } from "react-router-dom";


const CommonRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<PrivateRoutes />} />
    </Routes>
  );
};

export default CommonRoutes;