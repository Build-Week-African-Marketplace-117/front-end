import {FETCH_DATA_START, FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE} from '../actions/marketActions';

//creating initial state 
const initialState = {
    item:null,
    location:"",
    name:"",
    price:"",
    error:(""),
    isFetching:false

};

const reducer = (state = initialState, action )=>{
    switch (action.type){
        case FETCH_DATA_START:
            return {
                ...state,
                error:(""),
                isFetching:true
            }
            case FETCH_DATA_SUCCESS:
                return {
                    ...state, 
                    item:action.payload.name,
                    location:action.payload.location,
                    name:action.payload.name,
                    price:action.payload.price,
                    error:(""),
                    isFetchibg:false,

                }
                case FETCH_DATA_FAILURE:
                    return {
                        ...state,
                        error:action.payload,
                        isFetching: false
                    }
                    default:
                        return state;
    }
 
}

export default reducer;