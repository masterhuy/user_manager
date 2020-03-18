import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: ""
        }
    }
    
    //this.props.addFormStatus
    showButton = () => {
        if(this.props.addFormStatus === true){
            return (<button className="btn btn-outline-secondary" onClick={() => this.props.changeAddFormStatus()}>
                        <i className="fa fa-times mr-1" aria-hidden="true"></i>
                        Close form
                    </button>)
        }
        else{
            return (<button className="btn btn-outline-info" onClick={() => this.props.changeAddFormStatus()}>
                        <i className="fa fa-plus-square mr-1" aria-hidden="true"></i>
                        Add new user
                    </button>)
        }
    }

    isChange = (event) => {
        this.setState({
            tempValue: event.target.value
        });
        this.props.getTextSearch(this.state.tempValue);
    }

    render() {
        return (
            <div className="searchForm">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <div className="btn-group">
                                    <input 
                                        type="text" 
                                        onChange={(event) => this.isChange(event)}
                                        className="form-control" 
                                        placeholder="Press at least 3 characters" />
                                    <div 
                                        className="btn btn-info" 
                                        onClick={(text) => this.props.getTextSearch(this.state.tempValue)}
                                        >
                                        Search
                                    </div>
                                </div>
                                <div className="btn-group float-right">
                                    {this.showButton()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;