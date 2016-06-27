import React from 'react'

import Header from './Header.jsx'
import Menu from './Menu.jsx'
let Layout = React.createClass({
    render: function(){
        return (
            <div>
                <Menu />

                <div id="main" role="main">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

export default Layout
