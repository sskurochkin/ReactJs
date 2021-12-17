import React, { Component } from 'react';
import './Drawer.css'
import Backdrop from '../../../UI/Button/Backdrop/Backdrop';

const links = [
    1,2,3
]

class Drawer extends Component {

    renderLinks () {
        return links.map((link, index)=>{
            return (
                <li 
                    key={index}>
                        <a href="!#">link {link}</a> 
                </li>
            )
        })
        
    }

    render() { 
        return (
            <>
            <nav className ={!this.props.isOpen ? 'Drawer close': 'Drawer'}>
                <ul>
                    {this.renderLinks()}
                </ul>
            </nav>
            
            {this.props.isOpen ? <Backdrop
                onClickBg = {this.props.onClickBg}/> : null}
            </>
        );
    }
}
 
export default Drawer;