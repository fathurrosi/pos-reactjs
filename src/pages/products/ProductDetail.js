import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const ProductDetail = ({ show, handleClose, product, handleSave, isNew = false }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState('');
  const [photo, setPhoto] = useState('');
  const [unit, setUnit] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (product) {
      setId(product.id);
      setName(product.name);
      setDescription(product.description);
      setNotes(product.notes);
      setPhoto(product.photo);
      setUnit(product.unit);
      setType(product.type);
      setCategory(product.category);
    }
  }, [product]);

  const validateForm = () => {
    const newErrors = {};
    if (!name) {
      newErrors.name = 'Product name is required';
    } else if (name.length < 3) {
      newErrors.name = 'Product name must be at least 3 characters';
    }
    if (!description) {
      newErrors.description = 'Product description is required';
    } else if (description.length < 10) {
      newErrors.description = 'Product description must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedProduct = {
      id: id,
      name: name,
      description: description,
      notes: notes,
      photo: photo,
      unit: unit,
      type: type,
      category: category,
    };
    if (validateForm()) {
      handleSave(updatedProduct).then(() => {
        handleClose();
      });
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{isNew ? 'Create New Product' : 'Edit Product'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(event) => setName(event.target.value)} />
            {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Product Description</Form.Label>
            <Form.Control as="textarea" rows={3} value={description} onChange={(event) => setDescription(event.target.value)} />
            {errors.description && <div style={{ color: 'red' }}>{errors.description}</div>}
          </Form.Group>
          <Form.Group controlId="notes">
            <Form.Label>Notes</Form.Label>
            <Form.Control as="textarea" rows={3} value={notes} onChange={(event) => setNotes(event.target.value)} />
          </Form.Group>
          <Form.Group controlId="photo">
            <Form.Label>Photo</Form.Label>
            <Form.Control type="text" value={photo} onChange={(event) => setPhoto(event.target.value)} />
          </Form.Group>
          <Form.Group controlId="unit">
            <Form.Label>Unit</Form.Label>
            <Form.Control type="text" value={unit} onChange={(event) => setUnit(event.target.value)} />
          </Form.Group>
          <Form.Group controlId="type">
            <Form.Label>Type</Form.Label>
            <Form.Control type="text" value={type} onChange={(event) => setType(event.target.value)} />
          </Form.Group>
          <Form.Group controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" value={category} onChange={(event) => setCategory(event.target.value)} />
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

export default ProductDetail;