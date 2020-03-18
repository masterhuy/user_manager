import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            level: ""
        }
    }
    

    isChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        
        this.setState({
            [name]:value
        });
    }

    render() {
        return (
            <div className="col-auto user-manage">
                <form>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Add new user</h4>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <input 
                                    type="text"
                                    name="name"
                                    onChange={(event) => this.isChange(event)} 
                                    className="form-control" 
                                    placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text"
                                    name="phone"
                                    onChange={(event) => this.isChange(event)} 
                                    className="form-control" 
                                    placeholder="Phone" />
                            </div>
                            <div className="form-group">
                                <select 
                                    className="custom-select"
                                    name="level"
                                    onChange={(event) => this.isChange(event)}
                                >
                                    <option value={0}>Choose level</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Manager</option>
                                    <option value={3}>Member</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input
                                    type="reset"
                                    value="Save"
                                    className="btn btn-block btn-primary"
                                    onClick={(name, phone, level) => this.props.add(this.state.name, this.state.phone, this.state.level)}
                                />   
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddUser;