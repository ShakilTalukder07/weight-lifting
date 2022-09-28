import React from 'react';
import SingleCard from '../Calculations/SingleCard/SingleCard';
import './Cards.css'

const Cards = ({ heading, img, age, timeRequired }) => {
    return (
        <div>

            <div className="card-container" >
                {
                    Cards.map(card => <SingleCard
                        key={card.id}
                        heading={heading}
                        img={img}
                        age={age}
                        timeRequired={timeRequired}
                    ></SingleCard>)
                }
               
            </div>
        </div>

    );
};

export default Cards;