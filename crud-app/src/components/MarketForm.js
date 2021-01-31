import React, { Component } from 'react';


class MarketForm extends Component {
    state = {
    ...this.returnStateObj()
}
    returnStateObj(){
        if (this.props.currentIndex == -1)
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
        if(prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length)
        this.setState({...this.returnStateObj()})

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
             <button type="submit">Add/Edit Item</button>






            </form>
            


         

    
         

         
         
        
        )
    }
}
export default  MarketForm