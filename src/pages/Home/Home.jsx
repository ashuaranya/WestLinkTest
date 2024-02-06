// src/pages/Home.js
import React from 'react';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';

function Home({pageName}) {
    return (
        <>
            <Breadcrumbs></Breadcrumbs>
            <h1>Welcome to {pageName} Page</h1>
        </>
    );
}

export default Home;
