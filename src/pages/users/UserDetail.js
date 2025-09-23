import { Modal, Form, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

const UserDetail = ({ show, handleClose, user, handleSave, isNew = false }) => {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    useEffect(() => {
        if (user) {
            setUserName(user.username);
            setUserPassword(user.password);
        }
    }, [user]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedUser = {
            username: userName,
            password: userPassword,
            confirmPassword: confirmPassword,
        };
        if (validateForm()) {
            handleSave(updatedUser).then(() => {
                handleClose();
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!userName) {
            newErrors.userName = 'Username is required';
        }
        if (!userPassword) {
            newErrors.userPassword = 'Password is required';
        } else if (userPassword.length < 8) {
            newErrors.userPassword = 'Password must be at least 8 characters';
        }
        if (!confirmPassword) {
            newErrors.confirmPassword = 'Confirm Password is required';
        } else if (confirmPassword !== userPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{isNew ? 'Create New User' : 'Edit User'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form >
                    <Form.Group controlId="userName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName} disabled={!isNew}
                            onChange={(event) => setUserName(event.target.value)}
                        />
                          {errors.userName && <div style={{ color: 'red' }}>{errors.userName}</div>}
                    </Form.Group>
                    <Form.Group controlId="userPassword" className="mt-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={userPassword}
                            onChange={(event) => setUserPassword(event.target.value)}
                        />
                         {errors.userPassword && <div style={{ color: 'red' }}>{errors.userPassword}</div>}
                    </Form.Group>
                    <Form.Group controlId="confirmPassword" className="mt-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                        />
                         {errors.confirmPassword && <div style={{ color: 'red' }}>{errors.confirmPassword}</div>}
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default UserDetail;
