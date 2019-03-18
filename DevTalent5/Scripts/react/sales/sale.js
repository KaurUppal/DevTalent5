import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import SaleTableList from './saleTable';
import SaleModal from './saleModal';
import Alert from 'react-bootstrap/Alert';

export default class Sale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSale: {
                "CustomerId": "",
                "StoreId": "",
                "ProductId": "",
                "DateSold":""
            },
            saleData: [],
            customerList: [],
            storeList: [],
            productList: [],
            showModal: false
        };

        this.closeModal = this.closeModal.bind(this);
        this.addNew = this.addNew.bind(this);
        this.save = this.save.bind(this);
        this.selectSale = this.selectSale.bind(this);
        this.updateSale = this.updateSale.bind(this)
        
    };
    updateSale(sale) {
        this.setState({
            selectedSale:sale
        })
    }

    componentDidMount() {
       // debugger;
        $.get("/Sale/GetSalesList", (data) => {
            this.setState({
                saleData: data
            });
        });
        //console.log(this.state.saleData.CustomerId);
    };
    addNew() {
        let currentDate = new Date;
        $.get("/Store/GetStoreList", data => {
            this.setState({
                storeList: data,
                showModal: true
            })
        });

        $.get("/Product/GetProductList", data => {
            this.setState({
                productList: data
            })
        })

        $.get("/Customer/GetCustomerList", (data) => {
            this.setState({
                customerList: data,
                //selectedSale: { DateSold: currentDate }
            })
        })

    };

    save() {
        let saleToBeSaved = this.state.selectedSale;
       // debugger;
        console.log(this.state.selectedSale.CustomerId);
        if (this.state.selectedSale.DateSold == null) {
            <Alert>Plese fill the details</Alert>
        }
        else {
            console.log()
            this.setState({
                showModal: false
            });
            //debugger;
                $.ajax({
                    type: 'POST',
                    url: '/Sale/AddNewEdit',
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(saleToBeSaved),
                    success: function (data) {
                        console.log("success");
                        window.location.href = '/Sale/Sales';
                    }
                });
            }
        
    }
    closeModal() {
        this.setState({
            showModal: false
        })
    }

    selectSale(sale) {
       // let soldDate = sale.DateSold;
       // let soldFormatedDate = new Date(soldDate);
        this.addNew();
        this.setState({
            selectedSale: sale,
            showModal: true
        });
    }

    deleteSelectSale(sale) {
        $.ajax({
            type: 'POST',
            url: '/Sale/Delete/' + sale.Id,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(sale),
            success: function (data) {
                //debugger;
                console.log(data);
                window.location.href = '/Sale/Sales';
            }
        })

    };

    render() {
        //debugger;
        console.log("customer Id: " + this.state.selectedSale.CustomerId);
        return (
            <div>

                <Button color='red' onClick={() =>  this.addNew() }>Add Sale</Button>
                <SaleTableList saleData={this.state.saleData} deleteSelectSale={this.deleteSelectSale}
                    selectSale={this.selectSale}
                />
                {this.state.showModal && <SaleModal closeModal={this.closeModal} showModal={this.state.showModal}
                    customerList={this.state.customerList} selectedSale={this.state.selectedSale}
                    productList={this.state.productList}
                    storeList={this.state.storeList}
                    selectedSale={this.state.selectedSale}
                    save={this.save}
                    updateSale={this.updateSale}
                />}
            </div>
            );
    }
}
