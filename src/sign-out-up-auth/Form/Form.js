import React from 'react';
import './Form.css'
import img1 from '../../img/auth-icon/1.png'
import img2 from '../../img/auth-icon/2.png'

const Form = ({ data }) => {
    return (
        <div className='form-main-div'>
            {/* form title  */}
            {
                data ? <h1 className='form-title'>Please Sign Up</h1> : <h1 className='form-title'>Please Log In</h1>
            }
            {/* all input filds  */}
            <form >
                <div className='all-inputfild-div '>
                    <div>
                        {
                            data ? <div>
                                <input className='input-filds' type="name" name="name" placeholder='Enter Name' />
                            </div> : ""
                        }
                        <div>
                            <input className='input-filds' type="email" name="email" placeholder='Enter Email Id' />
                        </div>

                        <div>
                            <input className='input-filds' type="password" name="password" placeholder='Enter Password' />
                        </div>
                        {
                            data ? <input className='input-filds' type="password" name="CofrimPassword" placeholder='Enter Cofrim Password' /> : ''
                        }
                        {
                            data ? <div>
                                <button className='submit-button'>Sign Up</button>
                            </div> : <div>
                                <button className='submit-button'>Log In</button>
                            </div>
                        }


                        <div className='or-part'>
                            <hr />
                            <h5 className='text-or'>or</h5>
                            <hr />
                        </div>
                        <div className='main-icon-div'>
                            <img className='icon-img' src={img2} alt="/" />
                            <img className='icon-img' src={img1} alt="/" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;