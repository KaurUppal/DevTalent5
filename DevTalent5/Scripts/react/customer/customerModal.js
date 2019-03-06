import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Input from 'react-bootstrap/InputGroup';


export class CustomerModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Customer: null,

        };

       
    };

    render() {
        const selectedCustomer = this.props.selectedCustomer;

        return (

            <Modal show={this.props.showModal} >
                <Modal.Header>Customer</Modal.Header>
                <Modal.Content >
                    <Form>
                        <Form.Field>
                            <label>Customer Name</label>
                            <input placeholder="Customer Name" value={selectedCustomer.Name} id="name" />
                        </Form.Field>

                        <Form.Field>
                            <label>Customer Address</label>
                            <input placeholder="Customer Address" value={selectedCustomer.Address} id="address" />
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button primary  >Cancel</Button>
                    <Button color='red' >Save</Button>
                </Modal.Actions>
            </Modal>
        );
    }
}