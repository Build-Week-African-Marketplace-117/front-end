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
                <table>
                    <tbody>
                        {
                            this.state.list.map((item,index)=>{
                                return <tr key ={index}>
                                    <td>{item.location}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.description}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default MarketList;