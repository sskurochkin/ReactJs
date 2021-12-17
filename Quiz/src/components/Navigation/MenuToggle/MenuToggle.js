import React from 'react';
import './MenuToggle.css'

const MenuToggle = props =>{


    
    return (
        <div
            className = {props.isOpen ? 'MenuToggle active': 'MenuToggle'}
            onClick = {props.onToggle}>
            {props.isOpen ? 'Х' : 'M'}
        </div>
    )
}

export default MenuToggle