import React from 'react'

import Header from './Header.jsx'
let Layout = React.createClass({
    render: function(){
        return (
            <div>
                <Header />

                <div id="main" role="main">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

export default Layout
