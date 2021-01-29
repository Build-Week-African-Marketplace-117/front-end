import React from 'react'
import {Redirect, Route} from 'react-router-dom'

export const PrivateRoute = ({component :Component, ...rest}) =>{
    return(
        <Route
        {...rest}
         render ={(routeProps)=> {
        // If the token is in the localStorage, render the 
        if (localStorage.getItem("token")){
            console.log("token found, rendering component");
            return <Component {...routeProps}/>
        }
          //Otherwise redirect login
        else {
            console.log("no token found, redirect to login");
            return <Redirect to = "/login"/>
        }
        }
    }
         />       
    )
}