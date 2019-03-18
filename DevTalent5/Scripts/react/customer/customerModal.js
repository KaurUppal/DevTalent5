import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
//import ModalHeader from 'react-bootstrap/ModalHeader';
//import './StyleSheet.css';


export default class CustomerModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Customer: null

        };
        this.handleInputChange1 = this.handleInputChange1.bind(this);

    };
   




    handleInputChange1(event, type, value) {

        debugger;
        console.log("in change");
        if (type == 'name') {
            //console.log("customer Name:" + JSON.stringify(this.props.selectedCustomer));
            const target = event.target;
            const value1 = target.value;
            this.props.selectedCustomer.Name = value1
            console.log("customer:" + this.props.selectedCustomer);
        }
        else {
            const target = event.target;
            const value1 = target.value;
            this.props.selectedCustomer.Address = value1;
        }

        this.props.selectCustomer(this.props.selectedCustomer);

    }

    render() {
        //debugger;
        let selectedCustomer = this.props.selectedCustomer;
        let showModal = this.props.showModal.toString();
        //let this.props.showModal] = showModal;
        //        let [selectedCustomer, showModal] = this.props;
        //debugger;
        console.log(selectedCustomer + "--------" + showModal);
        // debugger;
        return (
            <Modal.Dialog show={showModal}>
                <Modal.Header closeButton onClick={() => this.props.closeModal()}>
                    <Modal.Title>Customer</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Customer Name" value={selectedCustomer.Name} id="name" onChange={({ value }) => this.handleInputChange1(event, "name", value)} />
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="Customer Address" value={selectedCustomer.Address} id="address" onChange={({ value }) => this.handleInputChange1(event, "address", value)} />
                        </Form.Group>


                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={() => this.props.closeModal()}>Close</Button>
                    <Button variant="success" onClick={() => this.props.saveCustomer()}>Save Changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        );
    }
}