import React from 'react'
import './Text.css'

const Text = ({size, text, color, paddingTop, paddingBottom, weight, ...props}) => {
    const style = {
        fontSize: size,
        color: color,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        fontWeight: weight,
    }

    return(
        <p
            {...props}
            style={style} 
            className="text">
            {text}
        </p>
    )
}

export default Text