import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Table from 'react-bootstrap/Table'
import TableBody from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

class StoresData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
     };

     render() {
        const store = this.props.store;
        return (

            <tr>
                <td>{store.Name}</td>
                <td>{store.Address}</td>
                <td><Button variant="danger" name="delete" onClick={() => this.props.deleteSelectStore(store)}>Delete</Button></td>
                <td><Button name="edit" onClick={() => this.props.selectStore(store)}>Edit</Button></td>
            </tr>

        );

    }
}


export default class StoresDataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    };

    render() {
        const storeData = this.props.storeData;
        return (

            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Actions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        storeData.map(store =>
                            (<StoresData key={store.Id} store={store} deleteSelectStore={this.props.deleteSelectStore} selectStore={this.props.selectStore} />))
                    }
                </tbody>

            </Table>

        );

    }
}



