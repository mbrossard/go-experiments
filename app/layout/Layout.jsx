import React from 'react'

import Navbar from './Navbar.jsx'
import Header from './Header.jsx'
import Menu from './Menu.jsx'
let Layout = React.createClass({
    render: function(){
        return (
            <div>
                <Navbar />
                <Menu />

                <div id="main-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

export default Layout
