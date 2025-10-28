import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import CategoryService from 'services/api/CategoryService';
import UnitService from 'services/api/UnitService';

import { v4 as uniqueId } from 'uuid';

const categoryService = new CategoryService();
const unitService = new UnitService();

const ProductDetail = ({ show, handleClose, product, handleSave, isNew = false }) => {
  const [errors, setErrors] = useState({});
  const [categories, setCategories] = useState([]);
  const [units, setUnits] = useState([]);
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(null);
  const [unit, setUnit] = useState('');
  const [category, setCategory] = useState('');
  const [profile, setProfile] = useState('');
  const [uniqueCode, setUniqueCode] = useState('');
  const [stock, setStock] = useState(0);
  const [minStock, setMinStock] = useState(0);
  const [basePrice, setBasePrice] = useState(0);
  const [salesPrice, setSalesPrice] = useState(0);


  useEffect(() => {
    var profile =localStorage.getItem('profile');
    if (product) {
      setCode(product.code);
      setName(product.name);
      setUnit(product.unit);
      setCategory(product.category);
      setProfile(product.profile);
      if (product.undefinedniqueCode === undefined) {
        product.uniqueCode = uniqueId();
      }

      setUniqueCode(product.uniqueCode);
      setStock(product.stock);
      setMinStock(product.minStock);
      setBasePrice(product.basePrice);
      setSalesPrice(product.salesPrice);
    }
    
    fetchOptions(profile);

  }, [product]);


  const fetchOptions = async (profile) => {
    try {
      const categories = await categoryService.getCategories(profile);
      if (categories) {
        setCategories(categories);
      }

      const units = await unitService.getUnits(profile);
      if (units) {
        setUnits(units);
      }
    } catch (error) {
      alert(error);
    }
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!code) {
      errors.code = "Code is required";
      isValid = false;
    }

    if (!name) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!unit) {
      errors.unit = "Unit is required";
      isValid = false;
    }

    // if (!type) {
    //   errors.type = "Type is required";
    //   isValid = false;
    // }

    if (!category) {
      errors.category = "Category is required";
      isValid = false;
    }

    // if (!profile) {
    //   errors.profile = "Profile is required";
    //   isValid = false;
    // }

    // if (!uniqueCode) {
    //   errors.uniqueCode = "Unique Code is required";
    //   isValid = false;
    // }

    if (stock < 0) {
      errors.stock = "Stock cannot be negative";
      isValid = false;
    }

    if (minStock < 0) {
      errors.minStock = "Min Stock cannot be negative";
      isValid = false;
    }

    if (basePrice < 0) {
      errors.basePrice = "Base Price cannot be negative";
      isValid = false;
    }

    if (salesPrice < 0) {
      errors.salesPrice = "Sales Price cannot be negative";
      isValid = false;
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(uniqueCode);
    const updatedProduct = {
      code: code,
      name: name,
      photo: photo,
      unit: unit,
      type: 'Item',
      category: category,
      profile: profile,
      uniqueCode: uniqueCode,
      stock: stock,
      minStock: minStock,
      basePrice: basePrice,
      salesPrice: salesPrice,
    };
    if (validateForm()) {
      handleSave(updatedProduct).then(() => {
        handleClose();
      });
    }
  };

  const handleFileChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{isNew ? 'Create New Product' : 'Edit Product'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="code">
            <Form.Label>Code</Form.Label>
            <Form.Control type="text" value={code} onChange={(event) => setCode(event.target.value)} />
            {errors.code && <div style={{ color: 'red' }}>{errors.code}</div>}
          </Form.Group>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(event) => setName(event.target.value)} />
            {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
          </Form.Group>
          <Form.Group controlId="photo">
            <Form.Label>Photo</Form.Label>
            <Form.Control type="file" onChange={(event) => setPhoto(event.target.files[0])} />
            {photo && <div>Selected file: {photo.name}</div>}
          </Form.Group>
          <Form.Group controlId="unit">
            <Form.Label>Unit</Form.Label>
            <Form.Control as="select" value={unit} onChange={(event) => setUnit(event.target.value)}>
              <option value="">Select Unit</option>
              {units.map((item, index) => (
                <option key={index} value={item.code}>{item.name}</option>
              ))}
            </Form.Control>
            {errors.unit && <div style={{ color: 'red' }}>{errors.unit}</div>}
          </Form.Group>
          <Form.Group controlId="category"  >
            <Form.Label>Category</Form.Label>
            <Form.Control as="select" value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="">Select Category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat.code}>{cat.name}</option>
              ))}
            </Form.Control>
            {errors.category && <div style={{ color: 'red' }}>{errors.category}</div>}
          </Form.Group>
          <Form.Group controlId="profile" style={{ display: 'none' }}>
            <Form.Label>Profile</Form.Label>
            <Form.Control type="text" value={profile} onChange={(event) => setProfile(event.target.value)} />              
          </Form.Group>
          <Form.Group controlId="uniqueCode" style={{ display: 'none' }}>
            <Form.Label>Unique Code</Form.Label>
            <Form.Control type="text" value={uniqueCode} onChange={(event) => setUniqueCode(event.target.value)} />
          </Form.Group>
          <Form.Group controlId="stock">
            <Form.Label>Stock</Form.Label>
            <Form.Control type="number" value={stock} onChange={(event) => setStock(event.target.value)} />
              {errors.stock && <div style={{ color: 'red' }}>{errors.stock}</div>}
          </Form.Group>
          <Form.Group controlId="minStock">
            <Form.Label>Min Stock</Form.Label>
            <Form.Control type="number" value={minStock} onChange={(event) => setMinStock(event.target.value)} />
              {errors.minStock && <div style={{ color: 'red' }}>{errors.minStock}</div>}
          </Form.Group>
          <Form.Group controlId="basePrice">
            <Form.Label>Base Price</Form.Label>
            <Form.Control type="number" value={basePrice} onChange={(event) => setBasePrice(event.target.value)} />
              {errors.basePrice && <div style={{ color: 'red' }}>{errors.basePrice}</div>}
          </Form.Group>
          <Form.Group controlId="salesPrice">
            <Form.Label>Sales Price</Form.Label>
            <Form.Control type="number" value={salesPrice} onChange={(event) => setSalesPrice(event.target.value)} />
              {errors.salesPrice && <div style={{ color: 'red' }}>{errors.salesPrice}</div>}
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