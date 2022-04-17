import React, { useState } from 'react';
import './Form.css'
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import img1 from '../../img/auth-icon/1.png'
import img2 from '../../img/auth-icon/2.png'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';



const Form = ({ data }) => {
    // email and password usestate
    const [user, setuser] = useState({})
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmpassword, setcnfirmpassword] = useState('')
    const [passworderror, setpassworderror] = useState('')

    const users = useAuthState(auth)

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

    const naviget = useNavigate('')

    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const [signInWithGithub] = useSignInWithGithub(auth);
    const heandelSignInSignUp = (e) => {
        e.preventDefault();
        setemail(e.target.email.value);
        setpassword(e.target.password.value);
        setcnfirmpassword(e.target.CofrimPassword.value);

    };
    const hendelcreateUser = () => {
        if (password === confirmpassword) {
            createUserWithEmailAndPassword(email, password)
            setpassworderror('')
            setuser(users)
        }
        else {
            setpassworderror('Your password and confirm password are not maching')
        }
    }
    const hendelcreateUserlogIn = () => {
        signInWithEmailAndPassword(email, password)
        setuser(users)
    }
    return (
        <div className='form-main-div'>
            {/* form title  */}
            {
                data ? <h1 className='form-title'>Please Sign Up</h1> : <h1 className='form-title'>Please Log In</h1>
            }
            {/* all input filds  */}
            <form onSubmit={heandelSignInSignUp}>
                <div className='all-inputfild-div '>
                    <div>
                        {
                            data ? <div>
                                <input className='input-filds' type="name" name="name" placeholder='Enter Name' required />
                            </div> : ""
                        }
                        <div>
                            <input className='input-filds' type="email" name="email" placeholder='Enter Email Id' required />
                        </div>

                        <div>
                            <input className='input-filds' type="password" name="password" placeholder='Enter Password' required />
                        </div>
                        {
                            data ? <div>
                                <input className='input-filds' type="password" name="CofrimPassword" placeholder='Enter Cofrim Password' required />
                                <p className='w-75 ms-5 text-danger'>{passworderror}</p>
                            </div> : ''
                        }

                        {
                            data ? <Link to='/login' className='ms-4 nav-link'>Already have an account</Link> :
                                <Link to='/signup' className='ms-4 nav-link'>Want to create an account</Link>
                        }
                        {
                            data ? <div>
                                <button className='submit-button ' onClick={hendelcreateUser} >Sign Up</button>
                            </div> : <div>
                                <button className='submit-button' onClick={hendelcreateUserlogIn}>Log In</button>
                            </div>
                        }
                        <div className='or-part mt-3'>
                            <hr />
                            <h5 className='text-or'>or</h5>
                            <hr />
                        </div>
                        <div className='main-icon-div'>
                            <img className='icon-img' onClick={() => signInWithGoogle()} src={img2} alt="/" />
                            <img className='icon-img' onClick={() => signInWithGithub()} src={img1} alt="/" />
                        </div>
                    </div>
                </div>
            </form>
            {
                user[0] ? naviget('/') : ''
            }
        </div>
    );
};

export default Form;