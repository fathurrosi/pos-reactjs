import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import ProductService from 'services/api/ProductService';
import ProductDetail from 'pages/products/ProductDetail';
import { Trash, Pencil } from 'react-bootstrap-icons';

const productService = new ProductService();

export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      showEditModal: false,
      selectedProduct: {},
      isNew: false,
      profile: localStorage.getItem('profile'),
      currentPage: 1,
      pageSize: 10,
      totalCount: 0,
    };
  }

  componentDidMount() {
    this.fetchProducts(this.state.currentPage, this.state.pageSize, this.state.profile);
  }

  fetchProducts = async (pageNumber, pageSize, profile) => {
    try {
      const response = await productService.getProducts(pageNumber, pageSize, profile);
      this.setState({ products: response.items, totalCount: response.totalCount });
    } catch (error) {
      console.error(error);
    }
  };

  handleEditProduct = (product) => {
    this.setState({ showEditModal: true, isNew: false, selectedProduct: product });
  };

  handleNewProduct = () => {
    this.setState({
      showEditModal: true,
      isNew: true,
      selectedProduct: {
        name: '',
        description: '',
        notes: '',
        photo: '',
        unit: '',
        type: '',
        category: '',
        price: 0,
        cost: 0,
        profile: this.state.profile
      },
    });
  };

  handleSaveProduct = async (updatedProduct) => {
    try {
      const response = await productService.saveProduct(updatedProduct);
      console.log(response);
      if (response) {
        this.fetchProducts(this.state.currentPage, this.state.pageSize, updatedProduct.profile);
      }
    } catch (error) {
      console.error(error);
    }
  };

  handleDeleteProduct = async (product) => {
    var confirmDelete = window.confirm('Are you sure to delete this record?');
    if (confirmDelete) {
      try {
        const response = await productService.deleteProduct(product.code, product.profile);
        console.log(response);
        if (response) {
          this.fetchProducts(this.state.currentPage, this.state.pageSize, product.profile);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber }, () => {
      this.fetchProducts(pageNumber, this.state.pageSize, this.state.profile);
    });
  };

  render() {
    const { currentPage, pageSize, totalCount } = this.state;
    const totalPages = Math.ceil(totalCount / pageSize);

    return (
      <div className="card">
        <div className="card-body">
          <button className="btn btn-primary" onClick={this.handleNewProduct}>
            Create New Product
          </button>
          <Table id="table-to-print" className="mt-4" striped bordered hover size="sm">
            <thead>
              <tr>
                <th>No</th>
                <th>Photo</th>
                <th>Code</th>
                <th>Name</th>
                <th>Category</th>
                <th>BasePrice</th>
                <th>SalesPrice</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((product, index) => {
                return (
                  <tr key={product.UniqueCode}>
                    <td>{product.rowIndex}</td>
                    <td>{product.photo && <img src={product.photo} alt={product.name} width="50" />}</td>
                    <td>{product.code}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.basePrice}</td>
                    <td>{product.salesPrice}</td>
                    <td>{product.stock}</td>
                    <td>
                      <a href="#" onClick={() => this.handleEditProduct(product)}>
                        <Pencil color="blue" size={15} />
                      </a>
                      <a href="#" onClick={() => this.handleDeleteProduct(product)}>
                        <Trash color="red" size={15} />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div className="card-footer clearfix">
          <ul className="pagination pagination-sm m-0 float-end">
            {Array(totalPages)
              .fill(null)
              .map((_, index) => (
                <li
                  key={index}
                  className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                >
                  <button className="page-link" onClick={() => this.handlePageChange(index + 1)}>
                    {index + 1}
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <ProductDetail
          show={this.state.showEditModal}
          handleClose={() => this.setState({ showEditModal: false })}
          product={this.state.selectedProduct}
          handleSave={this.handleSaveProduct}
          isNew={this.state.isNew}
        />
      </div>
    );
  }
}