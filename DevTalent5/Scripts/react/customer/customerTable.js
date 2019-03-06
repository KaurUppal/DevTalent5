import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Table from 'react-bootstrap/Table'
import TableBody from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

class CustomersData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };    
    };


    render() {
        const customer = this.props.customer;
        return (
            
            <tr>
                <td>{customer.Name}</td>
                <td>{customer.Address}</td>
                <td><Button variant="danger" name="delete" customer={customer} onClick={() => this.props.deleteSelectCustomer(customer)} >Delete</Button></td>
                 <td><Button name="edit" customer={customer} onClick={() => this.props.selectCustomer(customer)}>Edit</Button></td>
                    
                </tr>

        );

    }
}

export default class CustomersDataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    };

    render() {
        const customerData = this.props.customerData;
        return (

            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Actions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customerData.map(customer =>
                            (<CustomersData key={customer.Id} customer={customer} deleteSelectCustomer={this.props.deleteSelectCustomer} />))
                    }
                </tbody>
                
            </Table>

        );

    }
}



