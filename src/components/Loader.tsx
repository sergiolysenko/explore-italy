
import React from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoaderComponent: React.FC = () => {
    return (
        <div className="loading-spinner">
            <Loader type="Circles" color="#CD765B" height={100} width={100} />
        </div>
    )
}

export default LoaderComponent;