import React, { Component } from 'react';
import './../Css/App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import EditUser from './EditUser';
import DataUser from './../Database/Data';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addFormStatus: false,
            data: [],
            textSearch:"",
            editFormStatus: false,
            userEditObject:{}
        }
    }

    
    componentWillMount() {
        if(localStorage.getItem("userData") === null){
            localStorage.setItem("userData", JSON.stringify(DataUser));
        } else{
            let tempData = JSON.parse(localStorage.getItem("userData"));
            this.setState({
                data: tempData
            });
        }
    }
    

    deleteUser = (id) => {
        let dataAfterDelete = this.state.data.filter(item => item.id !== id);
        this.setState({
            data: dataAfterDelete
        });
        localStorage.setItem("userData", JSON.stringify(dataAfterDelete));
    }

    getUserEditInfo = (info) => {
        this.state.data.forEach((value) => {
            if(value.id === info.id){
                value.id = info.id;
                value.name = info.name;
                value.phone = info.phone;
                value.level = info.level
            }
        })
        localStorage.setItem("userData", JSON.stringify(this.state.data));
    }

    changeEditStatus = () => {
        this.setState({
            editFormStatus: !this.state.editFormStatus
        });
    }

    showEditForm = () => {
        if(this.state.editFormStatus === true){
            return <EditUser getUserEditInfo={(info) => this.getUserEditInfo(info)} userEditObject={this.state.userEditObject} changeEditStatus={() => this.changeEditStatus()}/>
        }
    }

    editUser = (user) => {
        this.setState({
            userEditObject: user
        });
    }

    getNewUserData = (name, phone, level) => {
        let item = {};
        item.id = uuidv4();
        item.name = name;
        item.phone = phone;
        item.level = level;

        let newData = this.state.data;
        newData.push(item);

        this.setState({
            data: newData
        });
        localStorage.setItem("userData", JSON.stringify(newData));
    }

    showAddForm = () => {
        if(this.state.addFormStatus === true){
            return <AddUser add={(name, phone, level) => this.getNewUserData(name, phone, level)}/>
        }
    }

    changeAddFormStatus = () => {
        this.setState({
            addFormStatus : !this.state.addFormStatus
        });
    }

    getTextSearch = (text) => {
        this.setState({
            textSearch: text
        });
    }

    render() {
        let resultSearch = [];
        let data = this.state.data;
        data.forEach((item) => {
            if(item.name.toLowerCase().indexOf(this.state.textSearch.toLowerCase()) !== -1 || item.phone.indexOf(this.state.textSearch) !== -1){
                if(this.state.textSearch.length >= 2){
                    resultSearch.push(item);
                }else{
                    resultSearch = this.state.data;
                }
            }
        });
        return (
            <div>
                <Header/>
                <Search
                    getTextSearch={(text) => this.getTextSearch(text)}
                    addFormStatus={this.state.addFormStatus}
                    changeAddFormStatus={() => this.changeAddFormStatus()}
                />
                <div className="container">
                    <div className="row">
                        {this.showEditForm()}
                    </div>
                </div>
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <TableData
                                deleteUser={(id) => this.deleteUser(id)}
                                changeEditStatus={() => this.changeEditStatus()}
                                editUser={(user) => this.editUser(user)} 
                                data={resultSearch}
                            />
                            {this.showAddForm()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
