import React from 'react';
import ReactDOM from 'react-dom';
import StoreTable from './storeTable.js'
import Button from 'react-bootstrap/Button';

export default class Store extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            storeList: []
        };

        this.deleteSelectStore = this.deleteSelectStore.bind(this);
    };

    componentDidMount() {
        $.get("/Store/GetStoreList", (data) => {
            this.setState({
                storeList: data
            });

        })
    }

    deleteSelectStore(store) {
        $.ajax({
            type: 'POST',
            url: '/Store/Delete/' + store.Id,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(store),
            success: function (store) {
                console.log("success");
                window.location.href = '/Store/Stores';
            }
        });

    }

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <Button color='red'>Add Store</Button>
                <StoreTable storeData={this.state.storeList} deleteSelectStore={this.deleteSelectStore} />
            </div>

        );
    }
}





