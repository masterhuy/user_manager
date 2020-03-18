import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            phone: this.props.userEditObject.phone,
            level: this.props.userEditObject.level
        }
    }

    isChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    saveClick = () => {
        let infoEdit = {};
        infoEdit.id = this.state.id;
        infoEdit.name = this.state.name;
        infoEdit.phone = this.state.phone;
        infoEdit.level = this.state.level;

        this.props.getUserEditInfo(infoEdit)
        this.props.changeEditStatus();
    }
    
    render() {
        let userEditObject = this.props.userEditObject;
        return (
            <div className="col-12 edit-user">
                <form>
                    <button className="close" onClick={() => this.props.changeEditStatus()}>
                        <i className="fa fa-times"></i>
                    </button>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Edit user</h4>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <input
                                    onChange={(event) => this.isChange(event)}
                                    defaultValue={userEditObject.name}
                                    type="text"
                                    name="name"
                                    className="form-control" 
                                    placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input 
                                    onChange={(event) => this.isChange(event)}
                                    defaultValue={userEditObject.phone}
                                    type="text"
                                    name="phone"
                                    className="form-control" 
                                    placeholder="Phone" />
                            </div>
                            <div className="form-group">
                                <select
                                    onChange={(event) => this.isChange(event)}
                                    defaultValue={userEditObject.level}
                                    className="custom-select"
                                    name="level"
                                >
                                    <option value={0}>Choose level</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Manager</option>
                                    <option value={3}>Member</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input
                                    type="button"
                                    value="Save"
                                    className="btn btn-block btn-primary"
                                    onClick={() => this.saveClick()}
                                />   
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditUser;