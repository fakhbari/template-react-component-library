import React from 'react';

interface buttonProp{
    label:string
}

const Button = (props:buttonProp) => {
    return <button>{props.label}</button>
};

export default Button;