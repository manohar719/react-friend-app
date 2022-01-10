import React from 'react';
import "./button.css"

const Button = ({...props}) => {
    return (
        <button className="btn-custom btn-primary">
            {props.children}
        </button>
    );
}

export default Button;
