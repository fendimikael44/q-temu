import React from 'react'
import './Cell.css'

const Cell = ({backgroundColor, children}) => {
    const style = {
        backgroundColor: backgroundColor,
    }

    return(
        <div 
            style={style}
            className="flex-box">
            {children}
        </div>
    )
}

export default Cell