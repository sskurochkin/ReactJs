import React, {Component} from 'react';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigation/MenuToggle/Drawer/Drawer';
import './Layout.css';

class Layout extends Component{

    state = {
        menu: false
    }

    toggleMenuHandler = ()=>{
        this.setState({
            menu: !this.state.menu
        })
    }



    render(){
        return(
            <div className='Layout'>

                <Drawer
                    isOpen = {this.state.menu}
                    onClickBg = {this.toggleMenuHandler}/>

                <MenuToggle
                    onToggle = {this.toggleMenuHandler}
                    isOpen = {this.state.menu}
                />

                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout