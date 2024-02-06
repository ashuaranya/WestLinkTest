// src/pages/Users.js
import React, { useState } from 'react';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PaginatedTable from '../../common/PaginatedTable/PaginatedTable';
import UserAddModal from './UserAddModal';
import mockDataJson from '../../assets/mockData.json';
import './Users.css';

function Users() {
    const mockData = [...mockDataJson];
    const [showAddModal, setShowAddModal] = useState(false);
    const [userData, setUserData] = useState(mockData);
    
    
    const handleShowAddModal = () => {
        setShowAddModal(true);
    };

    const handleCloseAddModal = () => {
        setShowAddModal(false);
    };

    const handleAddUser = (newUser) => {
        setUserData([...userData, newUser]);
    };
    
    return (
        <div>
            <Breadcrumbs />
            <Row>
                <Col sm={10}>
                    <div className="d-flex">
                        <h3 className="page-heading mr-10">Users</h3>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="rectangle"></div>
                            <span className="rect-text">Deleted</span>
                        </div>
                    </div>
                </Col>
                <Col sm={2} className="d-flex justify-content-end align-items-center">
                    <Button variant="primary" className="text-uppercase btn-add" onClick={handleShowAddModal}>
                        <FontAwesomeIcon icon={faPlus} className="mr-10" />
                        Add User
                    </Button>
                </Col>
            </Row>
            <Row>
                <PaginatedTable mockData={mockData} />
            </Row>
            {/* Other content for the Home page */}
            
            <UserAddModal
                showModal={showAddModal}
                handleClose={handleCloseAddModal}
                handleAddUser={handleAddUser}
            />
        </div>
    );
}

export default Users;
