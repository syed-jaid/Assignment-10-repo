import React from 'react';
import './Home.css'
import mainimg from '../../img/photo-man/manimg.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='d-md-flex justify-content-cente align-items-center'>
                <div className=' profile-discription'>
                    <p className='home-title '>I'M PHOTO..</p>
                    <p>When it comes to presenting work online, you can say that photographers have it easy. Compared to other businesses who often have to settle for stock photos or hire a professional to get great website images, photographers have no shortage of beautiful photos to pick from when creating an online portfolio.</p>
                    <Link to='/about' className=' ms-0 submit-button text-decoration-none px-5 py-2' >Read More</Link>
                </div>
                <div>
                    <img className='  profile-img' src={mainimg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;