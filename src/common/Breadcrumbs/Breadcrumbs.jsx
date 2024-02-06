// src/components/Breadcrumbs.js
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';

function Breadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <Breadcrumb className="text-uppercase">
            {pathnames.map((name, index) => {
                const isLast = index === pathnames.length - 1;
                return (
                    <Breadcrumb.Item key={name} active={isLast}>
                        {isLast ? (
                            name
                            ) : (
                                <Link >{name}</Link>
                                )}
                    </Breadcrumb.Item>
                    );
            })}
        </Breadcrumb>
        );
}

export default Breadcrumbs;
