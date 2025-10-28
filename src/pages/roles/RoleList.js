import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import RoleService from 'services/api/RoleService';
//import { Button } from 'react-bootstrap';
import EditRole from './EditRole';
//import { Trash, Pencil } from 'react-bootstrap-icons';

import { Trash, PencilSquare, Files } from 'react-bootstrap-icons';

const roleService = new RoleService();

export class RoleList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      roles: [],
      showEditModal: false,
      selectedRole: {},
      isNew: false,
      currentPage: 1,
      pageSize: 10,
      totalCount: 0,      
    };
  }

  componentDidMount() {
    this.fetchRoles(this.state.currentPage, this.state.pageSize);
  }

  fetchRoles = async (pageNumber, pageSize) => {
    try {
      const response = await roleService.getRoles(pageNumber, pageSize);
      this.setState({ roles: response.items, totalCount: response.totalCount });
    } catch (error) {
      console.error(error);
    }
  };

  handleEditRole = (role) => {
    this.setState({ showEditModal: true, isNew: false, selectedRole: role });
  }

  handleNewRole = () => {
    this.setState({ showEditModal: true, isNew: true, selectedRole: { name: '', description: '' } });
  };

  handleSaveRole = async (updatedRole) => {
    try {
      const response = await roleService.saveRole(updatedRole);
      console.log(response);
      if (response) {
        this.fetchRoles(this.state.currentPage, this.state.pageSize);
      }
    } catch (error) {
      console.error(error);
    }
  };

  handleDeleteRole = async (updatedRole) => {
    var confirmDelete = window.confirm("Are you sure to delete this record?")
    if (confirmDelete) {
      try {
        const response = await roleService.deleteRole(updatedRole.id);
        console.log(response);
        if (response) {
          this.fetchRoles(this.state.currentPage, this.state.pageSize);
        }

      } catch (error) {
        console.error(error);
      }
    }
  };


  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber }, () => {
      this.fetchRoles(pageNumber, this.state.pageSize);
    });
  };

  // handlePrint = () => {
  //   const table = document.getElementById('table-to-print');
  //   const win = window.open('', '', 'height=500,width=700');
  //   win.document.write(table.outerHTML);
  //   win.document.close();
  //   win.print();
  //   win.close();
  // };





  render() {
    const { roles, currentPage, pageSize, totalCount } = this.state;
    const totalPages = Math.ceil(totalCount / pageSize);

    return (
      <div className="card">
        <div className="card-body">
          <button className="btn btn-primary" onClick={this.handleNewRole}>
            Create New Role
          </button>
          <Table id='table-to-print' className='mt-4' striped bordered hover size='sm'>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.roles.map(t => {
                return (
                  <tr key={t.id}>
                    <td>{t.rowIndex}</td>
                    <td>{t.name}</td>
                    <td>{t.description}</td>

                    <td>
                      <a href="#" onClick={() => this.handleEditRole(t)}>
                        <Files color="blue" size={15} />
                      </a>
                      <a href="#" onClick={() => this.handleDeleteRole(t)}>
                        <Trash color="red" size={15} />
                      </a>

                      <a href="#" onClick={() => this.handleEditRole(t)}>
                        <PencilSquare color="blue" size={15} />
                      </a>
                    </td>

                    {/* <td>
                      <a href="#" onClick={() => this.handleEditRole(t)}>
                        <Pencil color="blue" size={15} />
                      </a>
                      <a href="#" onClick={() => this.handleDeleteRole(t)}>
                        <Trash color="red" size={15} />
                      </a>
                    </td> */}
                  </tr>)
              })
              }
            </tbody>
          </Table>
        </div>
        <div className="card-footer clearfix">
          <ul className="pagination pagination-sm m-0 float-end">
            {Array(totalPages).fill(null).map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => this.handlePageChange(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <EditRole
          show={this.state.showEditModal}
          handleClose={() => this.setState({ showEditModal: false })}
          role={this.state.selectedRole}
          handleSave={this.handleSaveRole}
          isNew={this.state.isNew}
        />
      </div>
    );
  }
}
