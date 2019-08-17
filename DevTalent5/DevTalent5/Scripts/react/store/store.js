import React from 'react';
import ReactDOM from 'react-dom';
import StoreTable from './storeTable.js'
import Button from 'react-bootstrap/Button';
import StoreModal from './storeModal';

export default class Store extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            storeList: [],
            selectedStore: {"Name": "",
                            "Address":""
            },
            showModal: false
        };

        this.deleteSelectStore = this.deleteSelectStore.bind(this);
        this.addNew = this.addNew.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.selectStore = this.selectStore.bind(this);
        this.saveStore = this.saveStore.bind(this);
    };

    componentDidMount() {
        $.get("/Store/GetStoreList", (data) => {
            this.setState({
                storeList: data,
                showModal: false
            });

        })
    }

    closeModal() {
        this.setState({
            showModal: false
        })
    }
    saveStore() {
        var storeToBeSaved = this.state.selectedStore;
        if (storeToBeSaved.Name == null || storeToBeSaved.Address == null) {
            alert("Please fill the details");
        }
        else {
            this.setState({
                showModal: false
            })
            debugger;
            console.log(JSON.stringify(storeToBeSaved));
            $.ajax({
                type:"POST",
                url: '/Store/AddNewEdit',
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(storeToBeSaved),
                success: function () {
                    window.location.href = '/Store/Stores';
                }
            })

        }
    }

    addNew() {
        this.setState({
            showModal: true,
            selectedStore: {"Name": "",
                             "Address":""   
            }
        })
    }

    selectStore(store) {
        this.setState({
            selectedStore: store,
            showModal: true
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
                <Button color='red' onClick={() => this.addNew()}>Add Store</Button>
                <StoreTable storeData={this.state.storeList} deleteSelectStore={this.deleteSelectStore} selectStore={this.selectStore} />
                {this.state.showModal && <StoreModal closeModal={this.closeModal} showModal={this.state.showModal}
                    selectedStore={this.state.selectedStore} selectStore={this.selectStore} saveStore={this.saveStore} />}
            </div>

        );
    }
}





