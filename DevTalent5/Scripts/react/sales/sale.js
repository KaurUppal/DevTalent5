import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import SaleTableList from './saleTable';
import SaleModal from './saleModal';
import Alert from 'react-bootstrap/Alert';
import { withRouter } from 'react-router-dom';

import DropdownButton from 'react-bootstrap/DropdownButton';

export default class Sale extends React.Component {
    constructor(props) {
        super(props);
        //const contextTypes = { router: React.PropTypes.object }
        this.state = {
           // contextTypes: { router: React.PropTypes.object },
            selectedSale: {
                "CustomerId": "",
                "StoreId": "",
                "ProductId": "",
                "DateSold": "",
                "FormatedDate":""
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
        this.setOptions = this.setOptions.bind(this);
        //this.test = this.test.bind(this);
        
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
    setOptions() {
        $.get("/Store/GetStoreList", data => {
            this.setState({
                storeList: data
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
    }
    addNew() {
        //console.log(this.props.location.pathname);
        //var currentRouteName = this.state.contextTypes.router.getCurrentPathname();
        //this.context.router.transitionTo(currentRouteName, { lang: 'de' });
       
        let currentDate = new Date;
        this.setOptions();
        this.setState({
            showModal: true,
            selectedSale: {
                "CustomerId": "",
                "StoreId": "",
                "ProductId": "",
                "DateSold": currentDate
            }
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

    parseJsonDate(jsonDateString) {
    return new Date(parseInt(jsonDateString.replace('/Date(', '')));
    }

    selectSale(sale) {
        let soldDate = sale.DateSold;
        console.log(soldDate);
        let soldFormatedDate = this.parseJsonDate(soldDate);
        this.setOptions();
        this.setState({
            selectedSale: sale,
            //selectedSale:{ DateSold: soldFormatedDate },    
            showModal: true
        });
    }

    deleteSelectSale(sale) {
        //debugger;
        console.log("SaleId is " + sale.Id);
        $.ajax({
            type: 'POST',
            url: '/Sale/Delete/' + sale.Id,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(sale),
            success: function (data) {
                console.log(data);
                console.log(data);
                window.location.href = '/Sale/Sales';
            }
        })

    };
    //test() {
    //    console.log("here we are");
    //    return (

    //        <p>this is</p>
               
    //    );
        
    

    render() {
       
        return (
            <div>
                <Button color='red' type="button" className="btn btn-primary" data-toggle="modal" data-target="#addNewModal" onClick={() => this.addNew()}>Add Sale</Button>
           
                <SaleTableList saleData={this.state.saleData} deleteSelectSale={this.deleteSelectSale}
                    selectSale={this.selectSale}
                    saleData={this.state.saleData}
                />
                <SaleModal
                customerList={this.state.customerList} selectedSale={this.state.selectedSale}
                productList={this.state.productList}
                storeList={this.state.storeList}
                selectedSale={this.state.selectedSale}
                save={this.save}
                updateSale={this.updateSale}
                />
            </div>
            );
    }
}
