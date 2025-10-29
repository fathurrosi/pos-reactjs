// export class PrevillageList extends Component {
// const PrevillageList = () => {
//   return (
//     <div>
//       <h1>PrevillageList Component</h1>
//     </div>
//   );
// };

// export default PrevillageList;


import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import PrevillageService from 'services/api/PrevillageService';
//import { Trash, PencilSquare, Files } from 'react-bootstrap-icons';
import { Modal, Form, Button } from 'react-bootstrap';

import RoleService from 'services/api/RoleService';
import Select from 'react-select';

const previllageService = new PrevillageService();
const roleService = new RoleService();


export class PrevillageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        role: '',
      },
      selectedRole: '',
      items: [],
      optRole: [],
      roleOptions: [],
    };
  }


  fetchOptions = async () => {
    try {
      const roles = await roleService.getRoleOptions();
      if (roles) {
        var selectedRoleId = 0;
        if (roles.length > 0) {
          selectedRoleId = roles[0].id;
        }

        const options = roles.map((item) => ({
          value: item.id,
          label: item.name,
        }));

        this.setState({
          optRole: roles,
          selectedRole: selectedRoleId,
          roleOptions: options
        }, () => {
          this.fetchPrevillages(selectedRoleId);
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  // fetchOptions = async () => {
  //   try {
  //     const roles = await roleService.getRoleOptions();
  //     if (roles) {

  //       var selectedRoleId = 0;
  //       if (roles.length > 0) {
  //         selectedRoleId = roles[0].id;
  //       }
  //       alert(selectedRoleId);
  //       const options = roles.map((item) => ({
  //         value: item.id,
  //         label: item.name,
  //       }));
  //       this.setState({ optRole: roles, selectedRole: selectedRoleId, roleOptions: options });

  //     }
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  fetchPrevillages = async (roleId) => {
    try {
      const list = await previllageService.getDataList(roleId);
      this.setState({ items: list });
    } catch (error) {
      alert(error);
    }
  };

  componentDidMount() {
    this.fetchOptions();

    // if (this.state.selectedRole > 0) {
    //   this.fetchPrevillages(this.state.selectedRole);
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedRole !== this.state.selectedRole && this.state.selectedRole > 0) {
      this.fetchPrevillages(this.state.selectedRole);
    }
  }


  handleRoleChange = async (event) => {
    try {
      const role = event.target.value
      if (role) {
        //alert(role);
        this.setState({ selectedRole: role });
        this.fetchPrevillages(role);
      }
    } catch (error) {
      alert(error);
    }
  };

  handleChange = (index, field, value) => {
    const items = this.state.items;
    items[index][field] = value;
    this.setState({ items });
  }


  // saveChanges = () => {
  //   const data = this.state.items;
  //   fetch('/api/update-data', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log(result);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }


  render() {

    return (
      <div className="card">
        <div className="card-body">
          <Form>
            <Form.Group controlId="role" >
              <Form.Label className="me-2">Role</Form.Label>
              <Select
                options={this.state.roleOptions}
                value={{ value: this.state.selectedRole, label: this.state.optRole.find((role) => role.id === this.state.selectedRole)?.name }}
                onChange={(selectedOption) => this.handleRoleChange({ target: { value: selectedOption.value } })}
                placeholder="Select Role"
              />
              {this.state.errors.role && <div style={{ color: 'red' }}>{this.state.errors.role}</div>}
            </Form.Group>
          </Form>

          {/* <Form>
            <Form.Group controlId="role" className="d-flex align-items-center">
              <Form.Label className="me-2">Role</Form.Label>
              <Select
                options={this.state.roleOptions}
                value={{ value: this.state.selectedRole, label: this.state.optRole.find((role) => role.id === this.state.selectedRole)?.name }}
                onChange={(selectedOption) => this.setState({ selectedRole: selectedOption.value })}
                placeholder="Select Role" className="me-4"
                
              />
              {this.state.errors.role && <div style={{ color: 'red' }}>{this.state.errors.role}</div>}
            </Form.Group>
          </Form> */}


          <Table id="table-to-print" className="mt-4" striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Menu</th>
                <th>Allow Create</th>
                <th>Allow Read</th>
                <th>Allow Update</th>
                <th>Allow Delete</th>
                <th>Allow Print</th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.menuName}</td>
                    <td><input type="checkbox" checked={item.allowRead} onChange={(e) => this.handleChange(index, 'allowRead', e.target.checked)} /></td>
                    <td><input type="checkbox" checked={item.allowCreate} onChange={(e) => this.handleChange(index, 'allowCreate', e.target.checked)} /></td>
                    <td><input type="checkbox" checked={item.allowUpdate} onChange={(e) => this.handleChange(index, 'allowUpdate', e.target.checked)} /></td>
                    <td><input type="checkbox" checked={item.allowDelete} onChange={(e) => this.handleChange(index, 'allowDelete', e.target.checked)} /></td>
                    <td><input type="checkbox" checked={item.allowPrint} onChange={(e) => this.handleChange(index, 'allowPrint', e.target.checked)} /></td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}