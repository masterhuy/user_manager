import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    deleteUser = (id) => {
        this.props.deleteUser(id)
    }

    mapData = () => {
        let data = this.props.data;
        return (
            data.map((value, key) => (
                <TableDataRow
                    deleteUser = {(id) => this.deleteUser(id)}
                    changeEditStatus={() => this.props.changeEditStatus()}
                    editUser={(user) => this.props.editUser(value)}
                    key={key}
                    stt={key}
                    id={value.id}
                    name={value.name}
                    phone={value.phone}
                    level={value.level}
                />
            ))
        )
    }

    render() {
        
        return (
            <div className="col data-table">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Level</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mapData()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;