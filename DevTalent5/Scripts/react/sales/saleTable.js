import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import moment from 'moment'

class SaleData extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const sale = this.props.sale;
        //const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        return (
            <tr>
                <td>{sale.CName}</td>
                <td>{sale.PName}</td>
                <td>{sale.SName}</td>
                <td>{sale.FormatedDate}</td>
                <td><Button variant="danger" name="delete" onClick={() => this.props.deleteSelectSale(sale)}>Delete</Button></td>
                <td><Button variant="warning" name="edit" onClick={() => this.props.selectSale(sale)}>Edit</Button></td>
            </tr>

            );
    }
}

export default class SaleTableList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           };
    };

    render() {
        const saleData = this.props.saleData;
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Product Name</th>
                        <th>Store Name</th>
                        <th>Date Sold</th>
                        <th>Actions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {saleData.map(sale =>
                        <SaleData key={sale.Id} sale={sale} deleteSelectSale={this.props.deleteSelectSale}
                            selectSale={this.props.selectSale} />)}
                </tbody>
            </Table>
            );
    }
    
}