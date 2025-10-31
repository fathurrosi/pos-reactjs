import React, { useState, useEffect } from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import PrevillageService from 'services/api/PrevillageService';
import RoleService from 'services/api/RoleService';
import Select from 'react-select';
import 'assets/styles/custom.css';

const previllageService = new PrevillageService();
const roleService = new RoleService();

const PrevillageList = () => {
  const [items, setItems] = useState([]);
  const [roleOptions, setRoleOptions] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');
  const [errors, setErrors] = useState({ role: '' });

  const [optionsFetched, setOptionsFetched] = useState(false);

  useEffect(() => {

    if (!optionsFetched) {
      fetchOptions();
      setOptionsFetched(true);
    }
  }, [optionsFetched]);

  const fetchOptions = async () => {
    try {
      const roles = await roleService.getRoleOptions();
      if (roles.length > 0) {
        const selectedRoleId = roles[0].id;
        const options = roles.map((item) => ({ value: item.id, label: item.name }));
        setSelectedRole(selectedRoleId);
        setRoleOptions(options);
        fetchPrevillages(selectedRoleId);
      }
    } catch (error) {
      alert(error);
    }
  };

  const fetchPrevillages = async (roleId) => {
    try {
      const list = await previllageService.getDataList(roleId);
      //const dataItems = buildTree(list);
      //setItems(dataItems);
      setItems(list);
    } catch (error) {
      alert(error);
    }
  };

  const handleRoleChange = (selectedOption) => {
    setSelectedRole(selectedOption.value);
    fetchPrevillages(selectedOption.value);
  };

  const handleChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  //   const handleChange = (item, field, value) => {
  //   const updateItem = (items) => {
  //     return items.map((i) => {
  //       if (i === item) {
  //         return { ...i, [field]: value };
  //       }
  //       if (i.children) {
  //         return { ...i, children: updateItem(i.children) };
  //       }
  //       return i;
  //     });
  //   };
  //   setItems(updateItem(items));
  // };



  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!selectedRole) {
      errors.role = "Role is required";
      isValid = false;
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };


  const handleSubmit = async () => {
    try {
      if (validateForm()) {
        await previllageService.saveData(items);
        alert("Data saved successfully");
      }
    } catch (error) {
      alert("Error: " + error);
    }
  };

  const handleClear = () => {
    fetchPrevillages(selectedRole);
  };


  // function buildTree(data) {
  //   const menuItems = {};
  //   data.forEach((item) => {
  //     menuItems[item.menuID] = {
  //       menuName: item.menuName,
  //       allowCreate: item.allowCreate,
  //       allowRead: item.allowRead,
  //       allowUpdate: item.allowUpdate,
  //       allowDelete: item.allowDelete,
  //       allowPrint: item.allowPrint,
  //       children: [],
  //     };
  //   });

  //   const tree = [];
  //   data.forEach((item) => {
  //     if (item.menuParentID === null || item.menuParentID === 0) {
  //       tree.push(menuItems[item.menuID]);
  //     } else {
  //       if (menuItems[item.menuParentID]) {
  //         menuItems[item.menuParentID].children.push(menuItems[item.menuID]);
  //       }
  //     }
  //   });

  //   return tree;
  // }

  // function renderMenuItems(items, level = 1) {
  //   return items.map((item, index) => (
  //     <tr key={index}>
  //       <td style={{ paddingLeft: level * 20 }}>
  //         {item.menuName}
  //       </td>
  //       <td className="center-checkbox">
  //         <input type="checkbox" checked={item.allowCreate} onChange={(e) => handleChange(index, 'allowCreate', e.target.checked)} />
  //       </td>
  //       <td className="center-checkbox">
  //         <input type="checkbox" checked={item.allowRead} onChange={(e) => handleChange(index, 'allowRead', e.target.checked)} />
  //       </td>
  //       <td className="center-checkbox">
  //         <input type="checkbox" checked={item.allowUpdate} onChange={(e) => handleChange(index, 'allowUpdate', e.target.checked)} />
  //       </td>
  //       <td className="center-checkbox">
  //         <input type="checkbox" checked={item.allowDelete} onChange={(e) => handleChange(index, 'allowDelete', e.target.checked)} />
  //       </td>
  //       <td className="center-checkbox">
  //         <input type="checkbox" checked={item.allowPrint} onChange={(e) => handleChange(index, 'allowPrint', e.target.checked)} />
  //       </td>
  //     </tr>
  //   ));
  // }

  // function renderTree(items, level = 1) {
  //   return items.map((item, index) => (
  //     <React.Fragment key={index}>
  //       {renderMenuItems([item], level)}
  //       {item.children && item.children.length > 0 && renderTree(item.children, level + 1)}
  //     </React.Fragment>
  //   ));
  // }

  const getPaddingLeft = (menuParentID) => {
    return menuParentID > 0 ? 35 : 10;
  };



  return (
    <div className="card">
      <div className="card-body">
        <Form>
          <Form.Group controlId="role">
            <Form.Label className="me-2">Role</Form.Label>
            <Select
              options={roleOptions}
              value={roleOptions.find((option) => option.value === selectedRole)}
              onChange={handleRoleChange}
              placeholder="Select Role"
            />
            {errors.role && <div style={{ color: 'red' }}>{errors.role}</div>}
          </Form.Group>
        </Form>
        <Table id="table-to-print" className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Menu</th>
              <th className="center-checkbox">Allow Read</th>
              <th className="center-checkbox">Allow Create</th>
              <th className="center-checkbox">Allow Update</th>
              <th className="center-checkbox">Allow Delete</th>
              <th className="center-checkbox">Allow Print</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                {/* <td>{item.menuName}</td> */}
                <td style={{ paddingLeft: getPaddingLeft(item.menuParentID) }}> {item.menuName} </td>
                <td className="center-checkbox">
                  <input
                    type="checkbox"
                    checked={item.allowRead}
                    onChange={(e) => handleChange(index, 'allowRead', e.target.checked)}
                  />
                </td>
                <td className="center-checkbox">
                  <input
                    type="checkbox"
                    checked={item.menuParentID === 0 ? false : item.allowCreate}
                    disabled={item.menuParentID === 0}
                    onChange={(e) => handleChange(index, 'allowCreate', e.target.checked)}
                  />
                </td>

                <td className="center-checkbox">
                  <input
                    type="checkbox"
                    checked={item.menuParentID === 0 ? false : item.allowUpdate}
                    disabled={item.menuParentID === 0}
                    onChange={(e) => handleChange(index, 'allowUpdate', e.target.checked)}
                  />
                </td>
                <td className="center-checkbox">
                  <input
                    type="checkbox"
                    checked={item.menuParentID === 0 ? false : item.allowDelete}
                    disabled={item.menuParentID === 0}
                    onChange={(e) => handleChange(index, 'allowDelete', e.target.checked)}
                  />
                </td>
                <td className="center-checkbox">
                  <input
                    type="checkbox"
                    checked={item.menuParentID === 0 ? false : item.allowPrint}
                    disabled={item.menuParentID === 0}
                    onChange={(e) => handleChange(index, 'allowPrint', e.target.checked)}
                  />
                </td>
              </tr>
            ))}
            {/* {renderTree(items)} */}
          </tbody>
        </Table>
        <div className="mt-auto d-flex justify-content-end pt-3 mb-2 me-2">
          <Button variant="secondary" onClick={handleClear}>
            Clear
          </Button>
          <Button className="ms-2" variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export { PrevillageList };