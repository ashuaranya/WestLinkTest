// src/components/AppRouter.js
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faCog, faBriefcase,faChartColumn } from '@fortawesome/free-solid-svg-icons';

// Import your pages
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import Settings from './pages/Settings/Settings';

function AppRouter() {
    
    const [activeLink, setActiveLink] = useState('users');
    
    // Function to handle click event and set active link
    const handleNavLinkClick = (link) => {
        setActiveLink(link);
    };
    
    return (
        <Router>
            <Container fluid className="vh-100 p-0">
                <Row className="h-100 w-100">
                    <Col sm={1} className="ml-10 text-light custom-nav d-grid">
                        <Nav defaultActiveKey="/dashboard/users" className="align-self-center justify-content-center">
                            <Nav.Link
                                className={activeLink === 'home' ? 'active' : 'd-flex align-items-center justify-content-center'}
                                onClick={() => handleNavLinkClick('home')}
                                as={Link} to="/dashboard/home">
                                <FontAwesomeIcon icon={faHome} className="icon-style" />
                            </Nav.Link>
                            <Nav.Link
                                className={activeLink === 'work' ? 'active' : 'd-flex align-items-center justify-content-center'}
                                onClick={() => handleNavLinkClick('work')}
                                as={Link} to="/dashboard/work">
                                <FontAwesomeIcon icon={faBriefcase} className="icon-style"/>
                            </Nav.Link>
                            
                            <Nav.Link
                                className={activeLink === 'chart' ? 'active' : 'd-flex align-items-center justify-content-center'}
                                onClick={() => handleNavLinkClick('chart')}
                                as={Link} to="/dashboard/chart">
                                <FontAwesomeIcon icon={faChartColumn} className="icon-style"/>
                            </Nav.Link>
                            <Nav.Link
                                className={activeLink === 'users' ? 'active' : 'd-flex align-items-center justify-content-center'}
                                onClick={() => handleNavLinkClick('users')}
                                as={Link} to="/dashboard/users">
                                <FontAwesomeIcon icon={faUsers} className="icon-style" />
                            </Nav.Link>
                        </Nav>
                        <Nav className="align-self-end justify-content-center mb-3">
                            <Nav.Link
                                className={activeLink === 'settings' ? 'active' : 'd-flex align-items-center justify-content-center'}
                                onClick={() => handleNavLinkClick('settings')}
                                as={Link} to="/dashboard/settings">
                                <FontAwesomeIcon icon={faCog} className="icon-style" />
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col sm={11} className="p-3 page-users">
                        <Routes>
                            <Route path="/dashboard/home" element={<Home pageName='Home'/>} />
                            <Route path="/dashboard/work" element={<Home pageName='Work'/>} />
                            <Route path="/dashboard/chart" element={<Home pageName='Chart'/>} />
                            <Route path="/dashboard/users" element={<Users />} />
                            <Route path="/dashboard/settings" element={<Settings />} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </Router>
        );
}

export default AppRouter;
