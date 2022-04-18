import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="text-center text-white footer-div mt-5" >
            {/* <!-- Grid container --> */}
            <div className="container p-4"></div>
            <h4>FOR MORE INFO CONNTAC US</h4>

            {/* <!-- Copyright --> */
                <div className="text-center p-3 copydiv">
                    © 2020 Copyright <br />
                    <a className="text-white" href='/'>Photo Max</a>
                </div>
            }
        </footer>
    );
};

export default Footer;