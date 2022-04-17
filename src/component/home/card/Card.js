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
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to='/chackout' className='sivises-button  submit-button text-decoration-none px-5 py-2' >Read More</Link>
            </div>
        </div>
    );
};

export default Card;