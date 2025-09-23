
import React from 'react';
import logo from 'assets/images/AdminLTELogo.png';

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="/Home" className="brand-link">
        <img src={logo}  alt="POS v1.0" className="brand-image img-circle elevation-3" />        
        <span className="brand-text font-weight-light">POS v1.0</span>
      </a>
      <div className="sidebar">
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item">
              <a href="/Role" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Role</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/User" className="nav-link">
                <i className="nav-icon fas fa-th"></i>
                <p>User</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;