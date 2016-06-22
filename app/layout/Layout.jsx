import React from 'react'

let Layout = React.createClass({
    render: function(){
        return (
            <div>
                <div id="main" role="main">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

export default Layout
