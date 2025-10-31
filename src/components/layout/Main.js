import React from 'react';
import Breadcrumb from 'components/layout/Breadcrumb';
import CommonRoutes from "routes/CommonRoutes";
import PageTitle from './PageTitle';
const Main = () => {
  return (
    <div className="content-wrapper" >
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              {/* <h1 className="m-0"> Judul Halaman</h1> */}
              <PageTitle></PageTitle>
            </div>
            <div className="col-sm-6">
              <Breadcrumb />
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
         <CommonRoutes />
        </div>
      </div>
    </div>
  );
};

export default Main;
