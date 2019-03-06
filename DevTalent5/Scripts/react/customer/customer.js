import React from 'react';
import ReactDOM from 'react-dom';
import CustomerDataTable from './customerTable.js'
import Button from 'react-bootstrap/Button';
import CustomerModal from './customerModal.js';
import Modal from 'react-bootstrap/Modal';

export default class Customer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            customerList: [],
            selectedCustomer: "",
            showModal: false,
        };

        this.deleteSelectCustomer = this.deleteSelectCustomer.bind(this);
        //this.saveCustomer = this.saveCustomer.bind(this);
        //this.closeModal = this.closeModal.bind(this);
        //this.addNewCustomer = this.addNewCustomer.bind(this);
    };

    componentDidMount() {
        $.get("/Customer/GetCustomerList", (data) => {
            this.setState({
                customerList: data
            });

        })
    }

    addNewCustomer() {
        this.setState({
            selectedCustomer: { "Name": "", "Address": ""},
            showModal: true,
        });
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
                <Button color='red' onClick={() => this.addNewCustomer()}>Add Customer</Button>
                <CustomerDataTable customerData={this.state.customerList} deleteSelectCustomer={this.deleteSelectCustomer}
                    selectCustomer={this.props.selectCustomer} />
                <CustomerModal selectCustomer={this.selectCustomer}
                    showModal={this.state.showModal} selectedCustomer={this.state.selectedCustomer} />
            </div>
            
        );
    }
}





