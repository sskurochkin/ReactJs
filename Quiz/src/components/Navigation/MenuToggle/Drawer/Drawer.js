import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Drawer.css'
import Backdrop from '../../../UI/Button/Backdrop/Backdrop';

const links = [

    {to: '/', label: 'List'},
    {to: '/auth', label: 'Авторизация'},
    {to: '/quiz-creator', label: 'Создать тест'}

]

class Drawer extends Component {

    renderLinks () {
        return links.map((link, index)=>{
            return (
                <li 
                    key={index}
                    onClick = {this.props.onClickBg}>
                    <Link to={link.to}>{link.label}</Link>
                    
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