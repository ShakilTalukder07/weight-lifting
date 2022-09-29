import React from 'react';
import './Cards.css'

const Cards = (props) => {
    console.log(props.product)
    const {picture,heading, age, timeRequired} = props.product
    return (
        <div>
            <div className="card" >
                <img src={picture} alt="" />
                <h3>{heading}</h3>
                <p>For age: {age}</p>
                <p>Time required: {timeRequired}</p>
                <button>Add to list</button>
            </div>
        </div>

    );
};

export default Cards;