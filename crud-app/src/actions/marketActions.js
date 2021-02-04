import axios from 'axios';

export const INSERT_ITEM = data =>{
    return {
        type:"INSERT_ITEM",
        payload: data
    }
} 
export const DELETE_ITEM = data =>{
    return {
        type:"DELETE_ITEM",
        payload: data
    }
}
export const UPDATE_ITEM = data =>{
    return {
        type:"UPDATE_ITEM",
        payload: data
    }
}
export const UPDATE_INDEX = data =>{
    return {
        type:"UPDATE_INDEX",
        payload: data
    }
}





