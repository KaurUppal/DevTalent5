import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton';
//import style from './Content/bootstrap.css';



export default class SaleModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            stores: [],
            sales:[]
        };
        this.handleInputChange1 = this.handleInputChange1.bind(this);
        //this.getFormattedDate = this.getFormattedDate.bind(this);
    };




    handleInputChange1(event, type, value) {
        
        if (type == 'select-customer') {
            debugger;
            //console.log("customer Name:" + JSON.stringify(this.props.selectedCustomer));
            const target = event.target;
            const value1 = target.value;
            console.log(value1);
            this.props.selectedSale.CustomerId = value1
            console.log(this.props.selectedSale.CustomerId);
            //target = value1;
        }
        else if (type == 'select-product') {
            const target = event.target;
            const value1 = target.value;
            this.props.selectedSale.ProductId = value1;
        }
        else if (type == 'date') {
            debugger;
            const target = event.target;
            const value1 = target.value;
            this.props.selectedSale.DateSold = value1;
        }    
        else {
            const target = event.target;
            const value1 = target.value;
            this.props.selectedSale.StoreId = value1;
        }
        //debugger;
        // this.props.selectSale(this.props.selectedSale);
        this.props.updateSale(this.props.selectedSale);
        console.log(this.props.selectedSale.DateSold);

    }

    render() {
        //let selectedStore = this.props.selectedStore;
        let showModal = this.props.showModal.toString();
        
        let optionCustomer = this.props.customerList.map(v => (
            
            <option key={v.Id} value={v.Id}>{v.Name}</option>));
        let optionStore = this.props.storeList.map(v =>
            (<option key={v.Id} value={v.Id}>{v.Name}</option>));
        let optionProduct = this.props.productList.map(v =>
            (<option key={v.Id} value={v.Id}>{v.Name}</option>));
  
          return (
            <Modal.Dialog show={showModal}>
                <Modal.Header closeButton onClick={() => this.props.closeModal()}>
                    <Modal.Title>Sale</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group>
                              <Form.Label>Customer</Form.Label>
                              <Form.Control title="Customer" as="select" id="select-customer" value={this.props.selectedSale.CustomerId} onChange={({ value }) => this.handleInputChange1(event, "select-customer", value)}>
                                  <option key="0">Customer</option>
                                  {optionCustomer}</Form.Control>
                              <Form.Label>Store</Form.Label>
                              <Form.Control as="select" id="select-store"  value={this.props.selectedSale.StoreId} onChange={(value) => this.handleInputChange1(event, "select-store", value)}>
                                  <option>Store</option>
                                  {optionStore}
                              </Form.Control>

                              <Form.Label>Product</Form.Label>
                              <Form.Control as="select" id="select-product" value={this.props.selectedSale.ProductId} onChange={({ value }) => this.handleInputChange1(event, "select-product", value)}>
                                  <option>Product</option>
                                  {optionProduct}
                              </Form.Control>
                              <Form.Label>Date</Form.Label>
                              <Form.Control id="date" placeholder="dd-mm-yyyy" value={this.props.selectedSale.DateSold} onChange={(value) => this.handleInputChange1(event, "date", value)}></Form.Control>

                        </Form.Group>


                    </Form>
                </Modal.Body>

                <Modal.Footer>
                      <Button variant="primary" onClick={() => this.props.closeModal()}>Close</Button>
                      <Button variant="success" onClick={() => this.props.save(this.props.selectedSale)}>Save Changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        );
    }
}