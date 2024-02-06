// src/components/UserAddModal.js
import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

function UserAddModal({ showModal, handleClose, handleAddUser }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleAddClick = () => {
    // Basic validation
    if (!name || !age || !email) {
      setError('Please fill in all fields.');
      return;
    }

    const newUser = {
      id: Date.now(), // Generate a unique ID (for demonstration purposes)
      name,
      age: parseInt(age),
      email,
    };

    handleAddUser(newUser);
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
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
