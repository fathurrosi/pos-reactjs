import React from 'react';
import PrivateRoutes from 'routes/PrivateRoutes';
import Home from 'pages/home';
import Login from 'pages/login';
import { Routes, Route } from "react-router-dom";


const CommonRoutes = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/home" element={<Home />} />
    //   <Route path="/login" element={<Login />} />
    //   <Route path="/user" element={<UserList />} />
    //   <Route path="/role" element={<RoleList />} />
    //   <Route path="/dashboard" element={
    //     <PrivateRoute>
    //       <Dashboard />
    //     </PrivateRoute>
    //   } />
    // </Routes>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<PrivateRoutes />} />
    </Routes>
  );
};

export default CommonRoutes;