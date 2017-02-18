import React from 'react'

let Header = React.createClass({
    render: function () {
        return <header id="header">
            <div id="logo-group">
                <span id="logo">
                <i className="fa fa-lg fa-rocket" aria-hidden="true"></i>
                </span>
            </div>
         </header>
    }
});

export default Header
