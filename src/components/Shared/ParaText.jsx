import React from 'react';

const ParaText = ({ children }) => {
    return (
        <p className='text-[16px] font-syne text-secondary'>
            {children}
        </p>
    );
};

export default ParaText;