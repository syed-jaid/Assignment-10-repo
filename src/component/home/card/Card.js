import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({ data }) => {
    console.log(data.imgurl)
    return (
        <div className="card-div mx-auto m-5" >
            <img src={data.imgurl} className="card-img-top h-50" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.discription}</p>
                <h3 className="card-text mt-0 mb-3"> Price : {data.price}</h3>
                <Link to='/chackout' className='sivises-button  py-2' >Book Now</Link>
            </div>
        </div>
    );
};

export default Card;