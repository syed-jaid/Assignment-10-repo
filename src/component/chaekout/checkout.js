import React, { useState } from 'react';
import './Chaekout.css'

const Chaekout = () => {
    const [name, setname] = useState(' ')
    const [email, setemail] = useState(' ')
    const [Number, setNumber] = useState(' ')
    const [address, setAddress] = useState(' ')

    const hendelForm = (e) => {
        e.preventDefault();
        alert(`Thanks you sir,
              for your order`)
        setname(e.target.name.value);
        setemail(e.target.email.value);
        setNumber(e.target.number.value);
        setAddress(e.target.Address.value);

    };

    const Clearinfo = () => {
        setname('');
        setemail('');
        setNumber('');
        setAddress('');
    }
    return (
        <div className='chaekout-main-div'>
            <div className='input-div'>
                <h2 className='text-center mt-2'>Please Order</h2>
                <form onSubmit={hendelForm} className="row g-3 m-3 p-3">
                    <div className="col-md-6">
                        <label className="form-label">User Name</label>
                        <input type="name" name='name' placeholder='Enter User Name' className="form-control input-fild" required />
                    </div>
                    <div className="col-md-6">
                        <label for="inputEmail4" name='email'
                            className="form-label">Email</label>
                        <input type="email" name='email' className="input-fild form-control" id="inputEmail4" placeholder='Enter User Email Id' />
                    </div>
                    <div className="col-12">
                        <label className="form-label">Phone Number</label>
                        <input type="text" name='number' className="form-control input-fild" placeholder="Phone Number" required />
                    </div>
                    <div className="col-12">
                        <label for="inputAddress" className="form-label">Address</label>
                        <input type="text" name='Address' className="form-control input-fild" id="inputAddress" placeholder="Address please" required />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn submit-button mt-4">Order Submit</button>
                    </div>
                </form>
            </div>
            {/* user profile */}
            <div className='profile-div'>
                <h3 className='text-center mt-4 text-white'>Order Info</h3>
                <img src="" alt="" />
                <p className='order-info '>User Name <br /><span className='set-info'>{name}</span></p>
                <p className='order-info'>Email <br /><span className='set-info'>{email}</span></p>
                <p className='order-info'>Phone Number <br /><span className='set-info'>{Number}</span></p>
                <p className='order-info '>Address <br /><span className='set-info'>{address}</span></p>
                {/* button change */}
                <button className='change-button' onClick={Clearinfo}>Change info</button>
            </div>

        </div>
    );
};

export default Chaekout;