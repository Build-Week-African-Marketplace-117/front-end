import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from "../actions/marketActions";
import {bindActionCreators} from 'redux'

class MarketForm extends Component {
    state = {
    ...this.returnStateObj()
}
    returnStateObj(){
        if (this.props.currentIndex === -1)
        return {
         location:"",
        name:"",
        description:"",
        price:""

        }
        else
         return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps){
        if(prevProps.currentIndex !== this.props.currentIndex || prevProps.list.length !== this.props.list.length)
        this.setState({...this.returnStateObj()})

    }

    handleInputChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = e =>{
        e.preventDefault()
        if(this.props.currentIndex === -1)
        this.props.insertItem(this.state)
        else
        this.props.updateItem(this.state)
    }



    render() {
        return (
            <form  onSubmit ={this.handleSubmit} autoComplete ="off" >
                <input name="location" placeholder="location" value= {this.state.location} onChange= {this.handleInputChange}/> <br/>
                <input name="name" placeholder="name" value= {this.state.name} onChange= {this.handleInputChange}/><br/>
                 <input name="price" placeholder="price" value= {this.state.price} onChange= {this.handleInputChange}/><br/>
                 <input name="description" placeholder="description" value= {this.state.description} onChange= {this.handleInputChange}/><br/>
             <button type="submit">Add/Edit Item</button>
</form>
        )
    }
}
const mapStateToProps = state => {
    return {
        list:state.list,
        currentIndex:state.currentIndex
    }
}

 const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        insertItem : actions.INSERT_ITEM,
        updateItem:actions.UPDATE_ITEM 
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps) (MarketForm)