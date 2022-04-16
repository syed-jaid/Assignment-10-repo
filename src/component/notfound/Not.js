import React from 'react';
import './NotFound.css'

const Not = () => {
    return (
        <div>
            <h1 className='found-title'><span className='color-yellow'>Sorry sir,</span>
                <br />
                This <span className='color-red'>page</span> has not <span className='color-red'>found</span> !!
            </h1>
            <h1 className='found-404'>404</h1>
        </div>
    );
};

export default Not;