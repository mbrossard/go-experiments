import React from 'react'

let Login = React.createClass({
    render: function () {
        return (
            <div id="page" >
                <header id="header" className="animated fadeInDown">

                    <div id="logo-group">
                        <span id="logo">
                              <i className="fa fa-5x fa-rocket" aria-hidden="true"></i>
                        </span>
                    </div>

                </header>
                <div id="main" role="main" className="animated fadeInDown">

                    <div id="content" className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 hidden-xs hidden-sm">
                                <h1 className="txt-color-red login-header-big">Go Experiments</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default Login
