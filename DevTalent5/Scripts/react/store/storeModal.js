import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


export default class StoreModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Product: null

        };
        this.handleInputChange1 = this.handleInputChange1.bind(this);

    };




    //handleInputChange1(event, type, value) {

    //    if (type == 'name') {
    //        //console.log("customer Name:" + JSON.stringify(this.props.selectedCustomer));
    //        const target = event.target;
    //        const value1 = target.value;
    //        this.props.selectedProduct.Name = value1
    //    }
    //    else {
    //        const target = event.target;
    //        const value1 = target.value;
    //        this.props.selectedProduct.Price = value1;
    //    }

    //    this.props.selectProduct(this.props.selectedProduct);

    //}

    render() {
        let selectedStore = this.props.selectedStore;
        let showModal = this.props.showModal.toString();

        return (
            <Modal.Dialog show={showModal}>
                <Modal.Header closeButton onClick={() => this.props.closeModal()}>
                    <Modal.Title>Store</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Product Name" value={selectedProduct.Name} id="name" onChange={({ value }) => this.handleInputChange1(event, "name", value)} />
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="Product Price" value={selectedProduct.Price} id="price" onChange={({ value }) => this.handleInputChange1(event, "price", value)} />
                        </Form.Group>


                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={() => this.props.closeModal()}>Close</Button>
                    <Button variant="success" onClick={() => this.props.saveProduct(selectedProduct)}>Save Changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        );
    }
}