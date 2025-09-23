import React from 'react';
import ImgUser from 'assets/images/user2-160x160.jpg';

const Navbar = () => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item dropdown user-menu">
        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
          <img src={ImgUser} className="user-image img-circle elevation-2" alt="User Image" />
          <span className="d-none d-md-inline">John Doe</span>
        </a>
        <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <li className="user-header bg-primary">
            <img src={ImgUser} className="img-circle elevation-2" alt="User Image" />
            <p>
              John Doe - Web Developer
              <small>Member since Nov. 2012</small>
            </p>
          </li>
          <li className="user-body">
            <div className="row">
              <div className="col-4 text-center">
                <a href="#">Followers</a>
              </div>
              <div className="col-4 text-center">
                <a href="#">Sales</a>
              </div>
              <div className="col-4 text-center">
                <a href="#">Friends</a>
              </div>
            </div>
          </li>
          <li className="user-footer">
            <a href="#" className="btn btn-default btn-flat">Profile</a>
            <a href="#" className="btn btn-default btn-flat float-right">Sign out</a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Navbar;
