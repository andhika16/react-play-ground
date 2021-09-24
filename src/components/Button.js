import React from 'react'

const Button = ({name,color,size,func}) => {
    return (
        <button
            className={size ? "button-lg" : "button"}
            style={{ backgroundColor: color }}
            onClick={func}>
            {name}
        </button>
    )
}

export default Button
