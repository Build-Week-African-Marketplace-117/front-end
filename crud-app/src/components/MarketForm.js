import React, { Component } from 'react';


class MarketForm extends Component {
    state = {
        location:"",
        name:"",
        description:"",
        price:""
    }

    handleInputChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = e =>{
        e.preventDefault()
        this.props.onAddOrEdit(this.state)
    }



    render() {
        return (
            <form  onSubmit ={this.handleSubmit} autoComplete ="off" >
                <input name="location" placeholder="location" value= {this.state.location} onChange= {this.handleInputChange}/> <br/>
                <input name="name" placeholder="name" value= {this.state.name} onChange= {this.handleInputChange}/><br/>
                 <input name="price" placeholder="price" value= {this.state.price} onChange= {this.handleInputChange}/><br/>
                 <input name="description" placeholder="description" value= {this.state.description} onChange= {this.handleInputChange}/><br/>
             <button type="submit">Add Item</button>






            </form>
            


         

    
         

         
         
        
        )
    }
}
export default  MarketForm