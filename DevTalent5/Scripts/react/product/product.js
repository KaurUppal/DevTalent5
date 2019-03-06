import React from 'react';
import ReactDOM from 'react-dom';
import ProductTable from './productTable.js'
import Button from 'react-bootstrap/Button';

export default class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productList: []
        };

        //this.deleteSelectCustomer = this.deleteSelectCustomer.bind(this);
    };

    componentDidMount() {
        $.get("/Product/GetProductList", (data) => {
            this.setState({
                productList: data
            });

        })
    }

    //deleteSelectProduct(customer) {
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
                
                <Button color='red'>Add Product</Button>
                <ProductTable productData={this.state.productList}
                     />
            </div>

        );
    }
}





