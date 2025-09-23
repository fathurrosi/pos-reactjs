import PrivateRoute from 'routes/PrivateRoute';
import Dashboard from 'pages/Dashboard';
import { UserList  } from "pages/users/UserList";
import { RoleList } from 'pages/roles/RoleList';
import { Routes, Route } from "react-router-dom";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route
        path="/user"
        element={
          // <PrivateRoute>
            <UserList />
          // </PrivateRoute>
        }
      />
      <Route
        path="/role"
        element={
          <PrivateRoute>
            <RoleList />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default PrivateRoutes;