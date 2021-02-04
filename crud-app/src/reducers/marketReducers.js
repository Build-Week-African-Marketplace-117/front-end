//import {INSERT_ITEM,DELETE_ITEM,UPDATE_ITEM,UPDATE_INDEX} from '../actions/marketActions';

export const marketReducers = (state, action )=>{
    var list = JSON.parse(localStorage.getItem('token'))

    switch (action.type){
        case "INSERT_ITEM":
            list.push(action.payload)
            localStorage.setItem('token',JSON.stringify(list))
            return {list, currentIndex:-1}

            case "DELETE_ITEM":
                list.splice(action.payload,1)
                localStorage.setItem('token',JSON.stringify(list))
                return {list, currentIndex:-1}

                case "UPDATE_ITEM":
                    list[state.currentIndex]=action.payload
                    localStorage.setItem('token',JSON.stringify(list))
                    return {list, currentIndex:-1}

                    case "UPDATE_INDEX":
                        return{list,currentIndex:action.payload}
                        
                        return {list, currentIndex:-1}
            
        
    

            default:
            return state
        }
    }
