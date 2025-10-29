import PrivateRoute from 'routes/PrivateRoute';
import Dashboard from 'pages/Dashboard';
import { UserList } from "pages/users/UserList";
import { RoleList } from 'pages/roles/RoleList';
import { ProductList } from 'pages/products/ProductList';
import { CategoryList } from 'pages/categories/CategoryList';
import { CustomerList } from 'pages/customers/CustomerList';
import { SupplierList } from 'pages/suppliers/SupplierList';
import { PrevillageList } from 'pages/previllages/PrevillageList';
import  Logout  from 'pages/Logout';
import { Routes, Route } from "react-router-dom";



const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/logout" element={<PrivateRoute> <Logout /> </PrivateRoute>} />
      <Route path="/user" element={<PrivateRoute> <UserList /> </PrivateRoute>} />
      <Route path="/role" element={<PrivateRoute> <RoleList /> </PrivateRoute>} />
      <Route path="/product" element={<PrivateRoute> <ProductList /> </PrivateRoute>} />
      <Route path="/role" element={<PrivateRoute> <RoleList /> </PrivateRoute>} />
      <Route path="/category" element={<PrivateRoute> <CategoryList /> </PrivateRoute>} />
      <Route path="/customer" element={<PrivateRoute> <CustomerList /> </PrivateRoute>} />
      <Route path="/supplier" element={<PrivateRoute> <SupplierList /> </PrivateRoute>} />
      <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
      <Route path="/previllage" element={<PrivateRoute> <PrevillageList /> </PrivateRoute>} />
    </Routes>
  );
};  

export default PrivateRoutes;