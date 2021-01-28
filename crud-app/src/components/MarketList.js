import React, { Component } from 'react';
import MarketForm from "../components/MarketForm";


class MarketList extends Component {
    state = {
        list:this.returnList()
    }

    returnList () {
     if (localStorage.getItem('items') ==null)
     localStorage.setItem('items',JSON.stringify([]))
     return JSON.parse(localStorage.getItem('items'))
      
    }

    onAddOrEdit=(data)=> {
        var list = this.returnList()
        list.push(data)
        localStorage.setItem('items',JSON.stringify(list))
        this.setState({list})
    }
    render() {
        return (
            <div>
                <MarketForm
                 onAddOrEdit ={this.onAddOrEdit}
             />
               
                <br/>
                <p>list of items in the market</p>
            </div>
        )
    }
}
export default MarketList;