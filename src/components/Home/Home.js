import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import './Home.css'

const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // console.log(products)
    return (
        <div className='home-container'>
            <div className="left-side">
                {
                    products.map(product =>
                        <Cards
                            key={product.id}
                            product={product}
                        ></Cards>)
                }
            </div>
            <div className="right-side">
                <div>
                    <h3>Shakil Ahmed</h3>
                    <p><small>Web Developer</small></p>
                    <div className='user-details'>
                        <h3>75 <small>kg</small></h3>
                        <h3>5.8 <small>feet</small></h3>
                        <h3>23 <small>yrs</small></h3>
                    </div>
                </div>
                <div className='break-options'>
                    <h3>Add a break</h3>
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                </div>
                <div className='exercise-details'>
                    <h3 >Exercise Details</h3>
                    <p>Exercise time:</p>
                    <p>Break time:</p>
                </div>
                <button className='activity-btn'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Home;