
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

import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/images/AdminLTELogo.png';
import photo from 'assets/images/user2-160x160.jpg';

function Sidebar() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="/" className="brand-link">
        <img
          src={logo}
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: '.8' }}
        />
        <span className="brand-text font-weight-light">POS v3.2.0</span>
      </a>
      <div className="sidebar">
        {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src={photo}
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Alexander Pierce
            </a>
          </div>
        </div> */}
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
                <i className="nav-icon fas fa-users" />
                <p>
                  User Management
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/User" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>User</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Role" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Role</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/settings" className="nav-link">
                <i className="nav-icon fas fa-cog" />
                <p>Settings</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
