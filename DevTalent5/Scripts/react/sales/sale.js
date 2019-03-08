import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import SaleTableList from './saleTable';

export default class Sale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            saleData :[]
        };
    };

    componentDidMount() {
        $.get("/Sale/GetSalesList", (data) => {
            this.setState({
                saleData: data
            });
        });
    };

    deleteSelectSale(sale) {
        $.ajax({
            type: 'POST',
            url: '/Sale/Delete/' + sale.Id,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(sale),
            success: function (sale) {
                console.log("success");
                window.location.href = '/Sale/Sales';
            }
        })

    };

    render() {
        return (
            <div>

                <Button color='red'>Add Sale</Button>
                <SaleTableList saleData={this.state.saleData} deleteSelectSale={this.deleteSelectSale}
                />
            </div>
            );
    }
}
