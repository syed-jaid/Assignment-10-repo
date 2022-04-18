import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import img1 from '../../img/auth-icon/1.png'
import img2 from '../../img/auth-icon/2.png'

const Login = () => {
    // all usestates are here
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [errors, seterror] = useState('')

    // location 
    const MainUser = useAuthState(auth)
    const naviget = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || '/';

    // gooogle and git hub
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const [signInWithGithub] = useSignInWithGithub(auth);

    // sign in form 
    const heandelSignInSignUp = (e) => {
        e.preventDefault();
        setemail(e.target.email.value);
        setpassword(e.target.password.value);
    };

    const hendelcreateUserlogIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                seterror(errorMessage)
            });
    }
    return (
        <div>
            <div className='form-main-div'>
                {/* form title  */}
                <h1 className='form-title'>Please Log In</h1>

                {/* all input filds  */}
                <form onSubmit={heandelSignInSignUp}>
                    <div className='all-inputfild-div '>
                        <div>
                            <input className='input-filds' type="email" name="email" placeholder='Enter Email Id' required />
                            <input className='input-filds' type="password" name="password" placeholder='Enter Password' required />
                            <p className='text-center'>{errors}</p>
                            <Link to='/signup' className='ms-4 nav-link'>Want to create an account</Link>
                            <button className='submit-button' onClick={hendelcreateUserlogIn}>Log In</button>

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
            </div>
        </div>
    );
};

export default Login;