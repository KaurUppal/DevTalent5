import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SaleModal from './saleModal';

class SaleData extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    parseJsonDate(jsonDateString) {
        let d = new Date(parseInt(jsonDateString.replace('/Date(', '')));
        return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
    }

    formattedDate(jsonDateString) {
        let d = new Date(parseInt(jsonDateString.replace('/Date(', '')));
        let month = String(d.getMonth() + 1);
        let day = String(d.getDate());
        const year = String(d.getFullYear());

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return `${day}/${month}/${year}`;
}

    render() {
        
        const sale = this.props.sale;
        //const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        return (
            <tr>
                <td>{sale.CName}</td>
                <td>{sale.PName}</td>
                <td>{sale.SName}</td>
                <td>{this.formattedDate(sale.DateSold)}</td>
                <td><Button variant="danger" name="delete" onClick={() => this.props.deleteSelectSale(sale)}>Delete</Button></td>
                <td><Button variant="warning" name="edit" data-toggle="modal" data-target="#addNewModal" onClick={() => this.props.selectSale(sale)} >Edit</Button></td>
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
        let saleData = this.props.saleData
        return (

            <div>
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
              
            </div>
           
            );
    }
    
}