import React, { useState } from 'react';
import './SignUp'
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import img1 from '../../img/auth-icon/1.png'
import img2 from '../../img/auth-icon/2.png'
import Form from '../Form/Form';
import Loging from '../../component/Loging';

const SignUp = () => {
    // all usestates are here
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmpassword, setcnfirmpassword] = useState('')
    const [passworderror, setpassworderror] = useState('')
    const [uperrors, setuperror] = useState('')
    const [errors, seterror] = useState('')

    // location 
    const naviget = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || '/';

    // firebase hook call
    const [createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true }
    );

    // update user data
    const [updateProfile,
        updating,
        Error
    ] = useUpdateProfile(auth);

    // gooogle and git hub
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const [signInWithGithub] = useSignInWithGithub(auth);

    // sign up form 
    const heandelSignInSignUp = async (e) => {
        e.preventDefault();
        setname(e.target.name.value)
        setemail(e.target.email.value);
        setpassword(e.target.password.value);
        setcnfirmpassword(e.target.CofrimPassword.value);


        console.log(e.target.email.value)
        if (confirmpassword === password) {
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName: name })
            if (loading) {
                return <Loging></Loging>
            };

            if (user) {
                naviget('/')
            }
            else if (error) {
                seterror(error.message)
            }
        }
        else {
            seterror(error?.message)
            setpassworderror('Your password and confirm password are not maching')
            return
        }
    };

    return (
        <div className='form-main-div'>

            <h1 className='form-title'>Please Sign Up</h1>
            {/* all input filds  */}

            <form onSubmit={heandelSignInSignUp}>
                <div className='all-inputfild-div '>
                    <div>
                        <input className='input-filds' type="name" name="name" placeholder='Enter Name' required />

                        <input className='input-filds' name="email" placeholder='Enter Email Id' required />

                        <input className='input-filds' name="password" placeholder='Enter Password' required />
                        <input className='input-filds' name="CofrimPassword" placeholder='Enter Cofrim Password' required />
                        <p className='w-75 ms-5 text-danger'>{passworderror}</p>
                        <p className='text-center text-danger'>{errors}{uperrors}</p>
                        <Link to='/login' className='ms-4 nav-link'>Already have an account</Link>
                        <button className='submit-button ' >Sign Up</button>
                        <div className='or-part mt-3'>
                            <hr />
                            <h5 className='text-or'>or</h5>
                            <hr />
                        </div>
                        <div className='main-icon-div'>
                            <img className='icon-img' onClick={() => {
                                signInWithGoogle()
                                    .then(() => {
                                        naviget(from, { replace: true })
                                    })
                            }} src={img2} alt="/" />
                            <img className='icon-img' onClick={() => {
                                signInWithGithub()
                                    .then(() => {
                                        naviget(from, { replace: true })
                                    })
                            }} src={img1} alt="/" />
                        </div>
                    </div>
                </div>
            </form>
            <Form></Form>
        </div>
    );
};

export default SignUp;