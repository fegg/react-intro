import React from 'react';
import './loading.css';

const Loading = props => {
    return <img className="st-loading-icon" width="32" height="32"
        alt="loading"
        src={require('../../assets/loading.gif')} />;
};

export default Loading;