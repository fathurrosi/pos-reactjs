import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Breadcrumb() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item">
                <Link to="/">Home</Link>
            </li>
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;

                return (
                    <li key={name} className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
                        {isLast ? (
                            name.charAt(0).toUpperCase() + name.slice(1)
                        ) : (
                            <Link to={routeTo}>{name.charAt(0).toUpperCase() + name.slice(1)}</Link>
                        )}
                    </li>
                );
            })}
        </ol>
    );
}

export default Breadcrumb;