import React from 'react';


const Color =(props)=>{

    const style = {
        width: '100%',
        height: 240,
        boxSizing: 'border-box',
        backgroundColor: props.color
    }

    return(
        <div style= {style}>
            
        </div>

    )
}

export default Color