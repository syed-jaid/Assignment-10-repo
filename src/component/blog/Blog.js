import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='d-flex'>
            {/* 1st qustion */}
            <div className='w-100'>
                <h3 className='m-5'> QUS :  Why are you using firebase? What other options do you have to implement authentication?</h3>

                <h5 className='m-5 ans-text'>ANS :At first, Firebase is used for authorization.Firebase Authentication makes it easier to get your users signed-in without having to understand the complexities behind implementing your own authentication system.. it security applies Google's internal expertise to easily build app sign-ins. Develop simple, multi-platform sign-in with Firebase Authentication. They are giving us  15+ Products and Solutions, Cross-Platform Solutions, Customize our App. To accelerate development.
                    <br />
                    Firebase is used for many purposes that we can make our apps and make them quality apps. Firebase manages all data in real-time in the database .so it becomes very easy to exchange data from the database. if we want to develop mobile apps such as live streaming, chat messaging, etc.
                </h5>
                <h5 className='m-5'>There are some other option to implement authentication in our websit
                    <ul className='mt-3'>
                        <li>Cookie-Based authentication.</li>
                        <li>SAML.</li>

                        <li>Token-Based authentication.</li>
                        <li>Third party access(OAuth, API-token)</li>
                        <li>OpenId.</li>

                    </ul>
                </h5>
            </div>
            {/* 2nd qustion */}
            <div className='w-100'>
                <h3 className='m-5'> QUS : What other services does firebase provide other than authentication</h3>
                <h5 className='m-5 ans-text'>ANS :Firebase provide us other services than authentication. There are many services which Firebase provides, Most useful of them are:
                    <ul className='mt-3'>
                        <li>Cloud Firestore</li>
                        <li>Cloud Functions</li>
                        <li>Hosting</li>
                        <li>Cloud Storage</li>
                        <li>Google Analytics</li>
                        <li>Predictions</li>
                        <li>Predictions</li>
                        <li>Cloud Messaging</li>
                    </ul>
                </h5>
                <h5 className='m-5'>Some services that we can use free in Firebase .
                    <ul className='mt-3'>
                        <li>Cloud Storage</li>
                        <li>Cloud Firestore</li>
                        <li>Firebase Realtime Database</li>
                        <li>Firebase Hosting</li>
                    </ul>
                </h5>
            </div>
        </div>
    );
};

export default Blog;