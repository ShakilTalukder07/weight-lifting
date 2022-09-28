import React from 'react';
import './SingleCard.css'

const SingleCard = ({ heading, img, age, timeRequired }) => {
    return (
        <div>
             <img src={img} alt="" />
                <h3>{heading}</h3>
                <p>For age: {age}</p>
                <p>Time required: {timeRequired}</p>
        </div>
    );
};

export default SingleCard;