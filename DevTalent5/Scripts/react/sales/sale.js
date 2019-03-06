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

    render() {
        return (
            <div>

                <Button color='red'>Add Sale</Button>
                <SaleTableList saleData={this.state.saleData}
                />
            </div>
            );
    }
}
