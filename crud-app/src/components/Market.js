import React from 'react';

const Market = props => {
    console.log("props from Market", props);

    return (
        <div className = "market">
            <h2>Item: {props.name}</h2>
            <h4>Location: {props.location}</h4>
            <h4>Price: {props.price}</h4>
            <h4>Description: {props.description}</h4>
        </div>
    )
}

export default Market;