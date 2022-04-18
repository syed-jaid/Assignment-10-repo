import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer class="text-center text-white footer-div mt-5" >
            {/* <!-- Grid container --> */}
            <div class="container p-4"></div>
            <h4>FOR MORE INFO CONNTAC US</h4>

            {/* <!-- Copyright --> */
                <div class="text-center p-3 copydiv">
                    © 2020 Copyright:
                    <a class="text-white" href='/'>Photo Max</a>
                </div>
            }
        </footer>
    );
};

export default Footer;