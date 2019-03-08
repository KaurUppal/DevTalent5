import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ProductTable from './productTable.js'
import Button from 'react-bootstrap/Button';


export default class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productList: []
        };

        this.deleteSelectProduct = this.deleteSelectProduct.bind(this);
    };


    componentDidMount() {
        //debugger;
        $.get("/Product/GetProductList", (data) => {
            this.setState({
                productList: data
            });

        })
    };

    deleteSelectProduct(product) {
        debugger;
        console.log("hello");
        $.ajax({
            type: 'POST',
            url: '/Product/DeleteProduct/' + product.Id,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(product),
            success: function (product) {
                console.log("success");
                window.location.href = '/Product/Products';
            }
        }
        )
    }

    render() {
        return (
            <div>
                
                <Button color='red'>Add Product</Button>
                <ProductTable productData={this.state.productList} deleteSelectProduct = {this.deleteSelectProduct}
                     />
            </div>

        );
    }
}





