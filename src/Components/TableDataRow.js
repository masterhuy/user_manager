import React, { Component } from 'react';

class TableDataRow extends Component {
    level = () => {
        if(this.props.level == 1){
            return "Admin"
        }
        else if(this.props.level == 2){
            return "Manager"
        }else if(this.props.level == 3){
            return "Member"
        }else{
            return "No level"
        }
    }

    editUser = () => {
        this.props.editUser();
        this.props.changeEditStatus();
    }

    deleteUser = (id) => {
        this.props.deleteUser(id)
    }

    render() {
        return (
            <tr>
                <td>{this.props.stt+1}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{this.level()}</td>
                <td>
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary" onClick={() => this.editUser()}>
                            <i className="fa fa-edit" />
                        </button>
                        <button type="button" className="btn btn-danger" onClick={(id) => this.deleteUser(this.props.id)}>
                            <i className="fa fa-trash" />
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;