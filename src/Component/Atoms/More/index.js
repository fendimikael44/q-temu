import React from 'react'
import './More.css'

const More = ({text, ...props}) => {
    const style = {    
        color: '#000000',
    }

    return(
        <a 
            {...props} 
            style={style} 
            href="see-all" 
            className="see-all">
            {text}
        </a>
    )
}

export default More