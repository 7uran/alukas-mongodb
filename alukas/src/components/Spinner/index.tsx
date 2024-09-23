import React from 'react';
import '../../app/globals.scss'; 

const Loader: React.FC = () => {
    return (
        <div className="loader">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    );
};

export default Loader;
