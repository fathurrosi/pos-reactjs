import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import PrevillageService from 'services/api/PrevillageService';
import { Form, Button } from 'react-bootstrap';
import RoleService from 'services/api/RoleService';
import Select from 'react-select';
import 'assets/styles/custom.css';

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


  // handleSubmit = () => {
  //   const dataItems = this.state.items;

  //   var result = previllageService.saveData(dataItems);
  //   result.then(() => {
  //     alert("Data saved successfully");
  //   });
  // };


  handleSubmit = () => {
    const dataItems = this.state.items;
    var result = previllageService.saveData(dataItems);
    result.then((response) => {
      if (response) {
        alert("Data saved successfully");
      } else {
        // do something else
        alert("Failed to save data");
      }
    }).catch((error) => {
      // handle error
      alert("Error: " + error);
    });
  };




  handleClear = () => {
    this.fetchPrevillages(this.state.selectedRole);
  };

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

          <Table id="table-to-print" className="mt-4" striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Menu</th>
                <th className="center-checkbox">Allow Create</th>
                <th className="center-checkbox">Allow Read</th>
                <th className="center-checkbox">Allow Update</th>
                <th className="center-checkbox">Allow Delete</th>
                <th className="center-checkbox">Allow Print</th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.menuName}</td>
                    <td className="center-checkbox"><input type="checkbox" checked={item.allowRead} onChange={(e) => this.handleChange(index, 'allowRead', e.target.checked)} /></td>
                    <td className="center-checkbox"><input type="checkbox" checked={item.allowCreate} onChange={(e) => this.handleChange(index, 'allowCreate', e.target.checked)} /></td>
                    <td className="center-checkbox"><input type="checkbox" checked={item.allowUpdate} onChange={(e) => this.handleChange(index, 'allowUpdate', e.target.checked)} /></td>
                    <td className="center-checkbox"><input type="checkbox" checked={item.allowDelete} onChange={(e) => this.handleChange(index, 'allowDelete', e.target.checked)} /></td>
                    <td className="center-checkbox"><input type="checkbox" checked={item.allowPrint} onChange={(e) => this.handleChange(index, 'allowPrint', e.target.checked)} /></td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        
          <div className="mt-auto d-flex justify-content-end pt-3 mb-2 me-2">
            <Button variant="secondary" onClick={this.handleClear}> Clear </Button>
            <Button className="ms-2" variant="primary" onClick={this.handleSubmit}> Save Changes </Button>
          </div>

        </div>
      </div>
    );
  }
}