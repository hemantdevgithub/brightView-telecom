import React from 'react';

const Container = ({ children }) => {
    return (
        <div className='max-w-[2520px] mx-auto xl:px-24 md:px-16 sm:px-2 px-4 w-full h-full'>
            {children}
        </div>
    );
};

export default Container;