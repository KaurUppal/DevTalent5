import React from 'react';
import Customer from './customer/customer.js';
import Product from './product/product';
import Sale from './sales/sale.js';
import Store from './store/store';


export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.returnComponent = this.returnComponent.bind(this);  
    }

    returnComponent(value) {
        if (value == 'customer') {
            return (<Customer />)
        }
        else if (value == 'product') {
            return (<Product />)
        }
        else if (value == 'sale') {
            return (<Sale />)
        }
        else {
            return (<Store/>)
        }
    }

    render() {
        return (<div><h1>Aman</h1>
            {this.returnComponent('customer')}
        </div>
        )
    }
}