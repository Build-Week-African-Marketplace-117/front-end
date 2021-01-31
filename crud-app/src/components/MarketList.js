import React, { Component } from 'react';
import MarketForm from "../components/MarketForm";


class MarketList extends Component {
    state = {
        currentIndex:-1,
        list:this.returnList()
    }

    returnList () {
     if (localStorage.getItem('items') ==null)
     localStorage.setItem('items',JSON.stringify([]))
     return JSON.parse(localStorage.getItem('items'))
      
    }

    onAddOrEdit=(data)=> {
        var list = this.returnList()
        if (this.state.currentIndex == -1)
        list.push(data)
        else 
        list[this.state.currentIndex] = data
        localStorage.setItem('items',JSON.stringify(list))
        this.setState({list})
    }

    handleEdit =index =>{
        this.setState({
            currentIndex:index
        })
    }
    render() {
        return (
            <div>
                <MarketForm
                 onAddOrEdit ={this.onAddOrEdit}
                 currentIndex={this.state.currentIndex}
                 list={this.state.list}
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
                                    <button onClick ={()=>this.handleEdit(index)}>Edit</button>
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