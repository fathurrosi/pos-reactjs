
// import React from 'react';
// import logo from 'assets/images/AdminLTELogo.png';

// const Sidebar = () => {
//   return (
//     <aside className="main-sidebar sidebar-dark-primary elevation-4">
//       <a href="/Home" className="brand-link">
//         <img src={logo}  alt="POS v1.0" className="brand-image img-circle elevation-3" />        
//         <span className="brand-text font-weight-light">POS v1.0</span>
//       </a>
//       <div className="sidebar">
//         <nav className="mt-2">
//           <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
//             <li className="nav-item">
//               <a href="/Role" className="nav-link active">
//                 <i className="nav-icon fas fa-tachometer-alt"></i>
//                 <p>Role</p>
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="/User" className="nav-link">
//                 <i className="nav-icon fas fa-th"></i>
//                 <p>User</p>
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;




import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/images/AdminLTELogo.png';

function Sidebar() {

  return (
    // <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <aside className="main-sidebar sidebar-dark-primary shadow">
      <div className="sidebar-brand">
        <a href="/" className="brand-link" >
          <img
            src={logo}
            alt="POS v3.2.0 Logo"
            className="brand-image opacity-75 shadow"
            style={{ opacity: '.8' }}
          />
          <span className="brand-text font-weight-light" style={{ color: 'white', fontSize: '1.2rem', fontWeight: '600' }}>POS v3.2.0</span>
        </a>
      </div>


      <div className="sidebar">

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>Dashboard</p>
              </Link>
            </li>

            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-database" />
                <p>
                  Master Data
                  <i className="right fas fa-angle-left" />
                </p>

              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/Category" className="nav-link">
                    <i className="nav-icon fas fa-chevron-right"></i>
                    <p>Category</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Product" className="nav-link">
                    <i className="nav-icon fas fa-chevron-right"></i>
                    <p>Product</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Customer" className="nav-link">
                    <i className="nav-icon fas fa-chevron-right"></i>
                    <p>Customer</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Supplier" className="nav-link">
                    <i className="nav-icon fas fa-chevron-right"></i>
                    <p>Supplier</p>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-users" />
                <p>
                  User Management
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/User" className="nav-link">
                    <i className="nav-icon fas fa-chevron-right"></i>
                    <p>User</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Role" className="nav-link">
                    <i className="nav-icon fas fa-chevron-right"></i>
                    <p>Role</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Role" className="nav-link">
                    <i className="nav-icon fas fa-chevron-right"></i>
                    <p>Previllage</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-cog" />
                <p>
                  Settings
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/Profile" className="nav-link">
                    <i className="nav-icon fas fa-chevron-right"></i>
                    <p>Profile</p>
                  </Link>
                </li>

              </ul>
            </li>
            <li className="nav-item">
              <Link to="/Logout" className="nav-link">
                <i className="nav-icon fas fa-sign-out-alt"></i>
                
                <p>Logout</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
