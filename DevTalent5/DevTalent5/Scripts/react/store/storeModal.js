import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { debug } from 'util';


export default class StoreModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           
        };
        this.handleInputChange1 = this.handleInputChange1.bind(this);

    };




    handleInputChange1(event, type, value) {

        if (type == 'name') {
            //debugger;
            //console.log("customer Name:" + JSON.stringify(this.props.selectedCustomer));
            const target = event.target;
            const value1 = target.value;
            this.props.selectedStore.Name = value1
        }
        else {
            const target = event.target;
            const value1 = target.value;
            this.props.selectedStore.Address = value1;
        }
       
        this.props.selectStore(this.props.selectedStore);

    }

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
                            <Form.Control placeholder="Store Name" value={selectedStore.Name} id="name" onChange={({ value }) => this.handleInputChange1(event, "name", value)} />
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="Store Address" value={selectedStore.Address} id="address" onChange={({ value }) => this.handleInputChange1(event, "address", value)} />
                        </Form.Group>


                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={() => this.props.closeModal()}>Close</Button>
                    <Button variant="success" onClick={() => this.props.saveStore()}>Save Changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        );
    }
}