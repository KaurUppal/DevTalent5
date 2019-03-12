import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ProductTable from './productTable.js'
import Button from 'react-bootstrap/Button';
import ProductModal from './productModal.js'


export default class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            showModal: false,
            selectedProduct: { "Name":"",
                                "Price":""
                              }
        };

        this.deleteSelectProduct = this.deleteSelectProduct.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.addNew = this.addNew.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
        this.selectProduct = this.selectProduct.bind(this);
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

    selectProduct(product) {
        this.setState({
            selectedProduct: product,
            showModal: true

        })
    }

    addNew() {
        this.setState({
            showModal: true
        })
    }

    closeModal() {
        this.setState({
            showModal: false
        })
    }

    saveProduct(productToBeSaved) {
        if ((productToBeSaved.Name == null) || (productToBeSaved.Price == null)) {
            alert("Please Enter the values");
        }
        else {
            this.setState({
                showModal: false
            })
            $.ajax({
                type: 'POST',
                url: '/Product/AddNewEdit',
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(productToBeSaved),
                success: function (data) {
                    console.log("success");
                    window.location.href = '/Product/Products';
                }
            });
        }
    }


    render() {
        return (
            <div>

                <Button color='red' onClick={() => this.addNew()}>Add Product</Button>
                <ProductTable productData={this.state.productList} deleteSelectProduct={this.deleteSelectProduct} selectProduct={this.selectProduct}
                />

                {this.state.showModal && <ProductModal showModal={this.state.showModal} closeModal={this.closeModal} selectProduct={this.selectProduct} selectedProduct
                    ={this.state.selectedProduct} saveProduct={this.saveProduct} />}
            </div>

        );
    }
}





