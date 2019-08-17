import React from 'react';
import ReactDOM from 'react-dom';
import CustomerDataTable from './customerTable.js';
import CustomerModal from './customerModal.js';
import { Button, Header, Image, Modal, Form, Input } from 'semantic-ui-react';
import ModalDialog from 'react-bootstrap/ModalDialog'
import Button from 'react-bootstrap/Button';

export default class Customer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checkState: false,
            customerList: [],
            selectedCustomer: {"Name" : "",
                               "Address" :"" 
            },
            showModal: false,
        };

        this.deleteSelectCustomer = this.deleteSelectCustomer.bind(this);
        this.saveCustomer = this.saveCustomer.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.addNewCustomer = this.addNewCustomer.bind(this);
        this.selectCustomer = this.selectCustomer.bind(this);
    };

    componentDidMount() {
        $.get("/Customer/GetCustomerList", (data) => {
            console.log()

            this.setState({
                customerList: data
            });

        })
    }

    addNewCustomer() {
       // debugger;
        console.log("name is Aman");
        console.log("Name is" + this.state.selectedCustomer.Name);
        this.setState({
            showModal: true
        });
    }

    selectCustomer(customer) {
       // debugger;
        //console.log(customer);
        this.setState({
            selectedCustomer: customer,
            showModal: true
        });
    }

    closeModal() {
        //debugger;
        this.setState({
            showModal: false
        });
    }

    saveCustomer() {
       var customerTobeSaved = this.state.selectedCustomer;
        //debugger;
        console.log(customerTobeSaved.Name);
        if ((customerTobeSaved.Name == "") || (customerTobeSaved.Address == "")) {
            alert("please fill the values");
        }
        else {
            console.log(customerTobeSaved);
            this.setState({
                showModal: false
            });
            console.log(this.state.checkState );
            debugger;
            //data: $("form[name=UserAddForm]").serialize(),
            $.ajax({
                type: 'POST',
                url: '/Customer/CreateAndEdit',
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(customerTobeSaved),
                success: function (data, customerTobeSaved) {
                    debugger;
                    console.log(data);
                    //const { customerList }
                    //const data1 = {
                    //    Id: data.Response,
                    //    Name: this.state.selectedCustomer.Name,
                    //    Address: this.state.selectedCustomer.Address
                    //}; 
                    
                    //this.setState({
                    //    checkState: true,
                    //   customerList: [{ ...this.state.customerList, data1}]
                    //});
                    window.location.href = '/Customer/Customers';
                }.bind(this)
                
                
            });
        }

       
    }

    deleteSelectCustomer(customer) {
        debugger;
        $.ajax({
            type: 'POST',
            url: '/Customer/DeleteCustomer/' + customer.Id,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(customer),
            success: function (customer) {
                debugger;
                //console.log("success");
                window.location.href = '/Customer/Customers';
            }
        });

    }

    render() {
        //debugger;
        console.log(JSON.stringify(this.state.selectedCustomer) + " " + this.state.showModal);
        let selectedCustomer = this.state.selectedCustomer;
        return (
            <div>
                <h1>Hello world</h1>
                <Button color='red' onClick={() => this.addNewCustomer()}>Add Customer</Button>
                //<CustomerDataTable customerData={this.state.customerList} />
                <CustomerDataTable customerData={this.state.customerList} selectCustomer={this.selectCustomer}
                    deleteSelectCustomer={this.deleteSelectCustomer} />

                {this.state.showModal && <CustomerModal showModal={this.state.showModal} closeModal={this.closeModal} selectedCustomer={selectedCustomer}
                    selectCustomer={this.selectCustomer} saveCustomer={this.saveCustomer} />}
            </div>

        );
    };
}






