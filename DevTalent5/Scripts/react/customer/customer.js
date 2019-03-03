import React from 'react';
import ReactDOM from 'react-dom';
import CustomerTable from './customerTable.js'
import Button from 'react-bootstrap/Button';

export default class Customer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            customerList: []
        };

        this.deleteSelectCustomer = this.deleteSelectCustomer.bind(this);
    };

    componentDidMount() {
        $.get("/Customer/GetCustomerList", (data) => {
            this.setState({
                customerList: data
            });

        })
    }

    deleteSelectCustomer(customer) {
        $.ajax({
            type: 'POST',
            url: '/Customer/DeleteCustomer/' + customer.Id,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(customer),
            success: function (customer) {
                console.log("success");
                window.location.href = '/Customer/Customers';
            }
        });

    }

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <Button color='red'>Add Customer</Button>
                <CustomerTable customerData={this.state.customerList} deleteSelectCustomer={this.props.deleteSelectCustomer}
                    selectCustomer={this.props.selectCustomer} />
            </div>
            
        );
    }
}





