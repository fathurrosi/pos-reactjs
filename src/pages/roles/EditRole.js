//import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

const EditRole = ({ show, handleClose, role, handleSave, isNew = false }) => {
    const [roleName, setRoleName] = useState('');
    const [roleDescription, setRoleDescription] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (role) {
            setRoleName(role.name);
            setRoleDescription(role.description);
        }
    }, [role]);

    const validateForm = () => {
        const newErrors = {};
        if (!roleName) {
            newErrors.roleName = 'Role name is required';
        } else if (roleName.length < 3) {
            newErrors.roleName = 'Role name must be at least 3 characters';
        }
        if (!roleDescription) {
            newErrors.roleDescription = 'Role description is required';
        } else if (roleDescription.length < 10) {
            newErrors.roleDescription = 'Role description must be at least 10 characters';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedRole = {
            id: role.id,
            name: roleName,
            description: roleDescription,
        };
        if (validateForm()) {
            handleSave(updatedRole).then(() => {
                handleClose();
            });
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{isNew ? 'Create New Role' : 'Edit Role'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form >
                    <Form.Group controlId="roleName">
                        <Form.Label>Role Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={roleName}
                            onChange={(event) => setRoleName(event.target.value)}
                        />
                        {errors.roleName && <div style={{ color: 'red' }}>{errors.roleName}</div>}
                    </Form.Group>
                    <Form.Group controlId="roleDescription">
                        <Form.Label>Role Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={roleDescription}
                            onChange={(event) => setRoleDescription(event.target.value)}
                        />
                        {errors.roleDescription && <div style={{ color: 'red' }}>{errors.roleDescription}</div>}
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
    );
};

export default EditRole;
