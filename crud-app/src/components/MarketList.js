import React, { Component } from 'react';
import MarketForm from "../components/MarketForm";
import {connect} from 'react-redux';
import * as actions from "../actions/marketActions";
import {bindActionCreators} from 'redux'
import Table from 'react-bootstrap/Table'
import "../App.css"

class MarketList extends Component {
    

    handleEdit =index =>{
        this.props.updateIndex(index)
    }

    handleDelete =index =>{
        this.props.deleteItem(index)
    }
    render() {
        return (
            <div>
                <MarketForm/>
                     
                <br/>
                <h1 className="list-title">Market List</h1>
                <Table striped bordered hover>
                    <thead>
                        
                        <th>Location</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                    </thead>
                    <tbody>
                        {
                            this.props.list.map((item,index)=>{
                                return <tr key ={index}>
                                    <td>{item.location}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.description}</td>
                                    <button onClick ={()=>this.handleEdit(index)}>Edit</button>
                                    <button onClick ={()=>this.handleDelete(index)}>Delete</button>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        list:state.list
    }
}

 const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        deleteItem : actions.DELETE_ITEM ,
        updateIndex:actions.UPDATE_INDEX
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(MarketList);