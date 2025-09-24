import React from 'react';
import Sidebar from 'components/layout/SideBar';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Main from "components/layout/Main";

const Container = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Main />
            <Footer />
        </>
    );
};

export default Container;