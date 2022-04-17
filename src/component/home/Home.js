import React from 'react';
import './Home.css'
import mainimg from '../../img/photo-man/manimg.png';
import { Link } from 'react-router-dom';
import Card from './card/Card';

const Home = () => {
    const data = [
        { title: 'Wedding Photography', price: ' $ 780', imgurl: 'https://media.istockphoto.com/photos/photographer-is-taking-pictures-the-bride-in-the-studio-picture-id540387740?k=20&m=540387740&s=612x612&w=0&h=AHqs7lP-IsrsRS9IGp4tLMupvg2eMmbzIbdjmyLtVLk= ', discription: 'Photo by Wedding Photographer Delhi on March 16, 2022. May be a closeup of 1 person..', kye: '23432' },
        { title: 'Modle Photography', price: ' $ 450', imgurl: 'https://images.unsplash.com/photo-1614778265188-dff1832ae5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBob3RvJTIwc2hvb3R8ZW58MHx8MHx8&w=1000&q=80', discription: 'Modle photography is one of the most exciting of photography,but it is one of the most challenging! ', kye: '321432' },
        { title: 'Professional Photography', price: ' $1200', imgurl: 'https://media.gettyimages.com/photos/photographer-in-the-studio-picture-id1091237140?s=612x612', discription: 'Professional photographers combine technical proficiency with artistry to create images of people..', kye: '12873' }

    ]
    return (
        <div>
            <div className='d-md-flex justify-content-cente align-items-center mb-5'>
                <div className=' profile-discription'>
                    <p className='home-title '>I'M PHOTO..</p>
                    <p>When it comes to presenting work online, you can say that photographers have it easy. Compared to other businesses who often have to settle for stock photos or hire a professional to get great website images, photographers have no shortage of beautiful photos to pick from when creating an online portfolio.</p>
                    <Link to='/about' className=' ms-0 submit-button text-decoration-none px-5 py-2' >Read More</Link>
                </div>
                <div>
                    <img className='  profile-img' src={mainimg} alt="" />
                </div>
            </div>
            <h1 className='home-title text-center mt-5 pt-5'>The Services I Provide </h1>
            <div className='d-md-flex justify-content-evenly'>
                {
                    data.map(data => <Card data={data} key={data.kye}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;