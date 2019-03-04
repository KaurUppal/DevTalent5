import React from 'react';
import ReactDOM from 'react-dom';
import StoreTable from './storeTable.js'
import Button from 'react-bootstrap/Button';

export default class Store extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            storeList: []
        };

        //this.deleteSelectCustomer = this.deleteSelectCustomer.bind(this);
    };

    componentDidMount() {
        $.get("/Store/GetStoreList", (data) => {
            this.setState({
                storeList: data
            });

        })
    }

    //deleteSelectCustomer(customer) {
    //    $.ajax({
    //        type: 'POST',
    //        url: '/Customer/DeleteCustomer/' + customer.Id,
    //        contentType: "application/json; charset=utf-8",
    //        data: JSON.stringify(customer),
    //        success: function (customer) {
    //            console.log("success");
    //            window.location.href = '/Customer/Customers';
    //        }
    //    });

    //}

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <Button color='red'>Add Store</Button>
                <StoreTable storeData={this.state.storeList} />
            </div>

        );
    }
}





