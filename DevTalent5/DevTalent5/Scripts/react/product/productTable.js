import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Table from 'react-bootstrap/Table'
import TableBody from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

class ProductsData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
   };


    render() {
        const product = this.props.product;
        return (

            <tr>
                <td>{product.Name}</td>
                <td>{product.Price}</td>
                <td><Button variant="danger" name="delete" product={product} onClick={() => this.props.deleteSelectProduct(product)} >Delete</Button></td>
                <td><Button name="edit" product={product} onClick={() => this.props.selectProduct(product)}>Edit</Button></td>
            </tr>

        );

    }
}

export default class ProductsDataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    };

    render() {
        const productData = this.props.productData;
        return (

            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productData.map(product =>
                            (<ProductsData key={product.Id} product={product} deleteSelectProduct={this.props.deleteSelectProduct} selectProduct={this.props.selectProduct} />))
                    }
                </tbody>

            </Table>

        );

    }
}



