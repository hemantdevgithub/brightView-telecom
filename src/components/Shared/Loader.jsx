import React from 'react';
import { BounceLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <BounceLoader color="#1370b5" />
        </div>
    );
};

export default Loader;