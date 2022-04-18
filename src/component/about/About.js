import React from 'react';
import img from '../../img/about-me/my.jpg'
import './About.css'

const About = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <img className='profile-img' src={img} alt="" />
            <div>
                <p className='porfile-info'>
                    <span className='profile-name'>It’s me Syed Jahid</span>. I have completed my SSC in 2021. After completing my SSC I stope my study only because of learning programming. And I am determined to continue my learning and struggle until become successful in this digital world.  I am trying to give laser focus on this sector.

                    Programming seemed very incomprehensible to me before joining Programming Hero now my Point of view is completely opposite. Now I am Optimistic and l think I can do something good by learning programming.

                    I can understand the importance to become skillful for changing the economic situation of my family as well as my carrier. I trust my hardworking ability and my patience.

                    Since I have to earn money along with my academic education, my short-term goal is to become a freelancer or a part-time worker.

                    My quick learning ability will help me to deal with any adverse situation.

                    As I am a person who is positive about every aspect of life, I believe something very special is waiting for me. Insa-Allah.
                    <br />
                    Thank you..
                </p>
            </div>
        </div>
    );
};

export default About;