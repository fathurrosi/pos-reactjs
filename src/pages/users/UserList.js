import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import UserService from 'services/api/UserService';
import { Trash, Pencil } from 'react-bootstrap-icons';

import UserDetail from 'pages/users/UserDetail';

const userService = new UserService();

export class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showEditModal: false,
      selectedUser: {},
      isNew: false,
      currentPage: 1,
      pageSize: 10,
      totalCount: 0,
    };
  }

  componentDidMount() {
    this.fetchUsers(this.state.currentPage, this.state.pageSize);
  }

  fetchUsers = async (pageNumber, pageSize) => {
    try {
      const response = await userService.getUsers(pageNumber, pageSize);
      this.setState({ users: response.items, totalCount: response.totalCount });
    } catch (error) {
      console.error(error);
    }
  };

  handleEditUser = (user) => {
    this.setState({ showEditModal: true, isNew: false, selectedUser: user });
  }


  handleNewUser = () => {
    this.setState({ showEditModal: true, isNew: true, selectedUser: { username: '', password: '' } });
  };


  handleSaveUser = async (updatedUser) => {
    try {
      const response = await userService.saveUser(updatedUser);
      console.log(response);
      if (response) {
        this.fetchUsers(this.state.currentPage, this.state.pageSize);
      }
    } catch (error) {
      console.error(error);
    }
  };

  handleDeleteUser = async (updatedUser) => {
    var confirmDelete = window.confirm("Are you sure to delete this record?")
    if (confirmDelete) {
      try {
        const response = await userService.deleteUser(updatedUser.username);
        if (response) {
          this.fetchUsers(this.state.currentPage, this.state.pageSize);
        }
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  };


  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber }, () => {
      this.fetchUsers(pageNumber, this.state.pageSize);
    });
  };

  render() {
    const { users, currentPage, pageSize, totalCount } = this.state;
    const totalPages = Math.ceil(totalCount / pageSize);

    return (
      <div className="card">
        <div className="card-body">
          <button className="btn btn-primary" onClick={this.handleNewUser}>
            Create New User
          </button>
          <Table id='table-to-print' className='mt-4' striped bordered hover size='sm'>
            <thead>
              <tr>
                <th>No</th>
                <th>Username</th>
                <th>Machine Name</th>
                <th>Last Login</th>
                <th>IP Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map(t => {
                return (
                  <tr key={t.username}>
                    <td>{t.rowIndex}</td>
                    <td>{t.username}</td>
                    <td>{t.machineName}</td>
                    <td>{t.lastLogin}</td>
                    <td>{t.ipAddress}</td>
                    <td>
                      <a href="#" onClick={() => this.handleEditUser(t)}>
                        <Pencil color="blue" size={15} />
                      </a>
                      <a href="#" onClick={() => this.handleDeleteUser(t)}>
                        <Trash color="red" size={15} />
                      </a>
                    </td>
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
        <UserDetail
          show={this.state.showEditModal}
          handleClose={() => this.setState({ showEditModal: false })}
          user={this.state.selectedUser}
          handleSave={this.handleSaveUser}
          isNew={this.state.isNew}
        />
      </div>
    );
  }
}
