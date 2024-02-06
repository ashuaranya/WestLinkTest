// src/components/UserAddModal.js
import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

function UserAddModal({ showModal, handleClose, handleAddUser }) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleAddClick = () => {
    // Basic validation
    if (!name || !age || !email || !role) {
      setError('Please fill in all fields.');
      return;
    }

    const newUser = {
      id: Date.now(), // Generate a unique ID (for demonstration purposes)
      fname: name,
      lname: lastName,
      age: parseInt(age),
      email,
      role,
      status: 'registered'
    };

    handleAddUser(newUser);
    // Reset form fields
    setName('');
    setLastName('');
    setAge('');
    setEmail('');
    setRole('');

    handleClose();
  };

  const handleModalHide = () => {
    setError('');
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleModalHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formRole">
            <Form.Label>Role</Form.Label>
            <Form.Control
              type="role"
              placeholder="Enter role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" onClick={handleModalHide}>
              Close
          </Button>
          <Button variant="primary" onClick={handleAddClick}>
              Add User
          </Button>
      </Modal.Footer>
    </Modal>
    );
}

export default UserAddModal;
