import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function PageTitle() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;

            return (
                <h1 className="m-0"> 
                    {isLast ? (
                        name.charAt(0).toUpperCase() + name.slice(1)
                    ) : (
                        <Link to={routeTo}>{name.charAt(0).toUpperCase() + name.slice(1)}</Link>
                    )} Page</h1>
            );
        })

    );
}

export default PageTitle;