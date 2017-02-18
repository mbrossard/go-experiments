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
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                                <div className="well no-padding">
                                    <form action="#/home" id="login-form" className="smart-form client-form">
                                        <header>
                                            Sign In
                                        </header>
                                        <fieldset>
                                            <section>
                                                <label className="label">E-mail</label>
                                                <label className="input"> <i className="icon-append fa fa-user"/>
                                                    <input type="email" name="email" data-smart-validate-input="" data-required="" data-email="" data-message-required="Please enter your email address" data-message-email="Please enter a VALID email address"/>
                                                    <b className="tooltip tooltip-top-right"><i className="fa fa-user txt-color-teal"/>
                                                        Please enter email address/username</b></label>
                                            </section>
                                            <section>
                                                <label className="label">Password</label>
                                                <label className="input"> <i className="icon-append fa fa-lock"/>
                                                    <input type="password" name="password" data-smart-validate-input="" data-required="" data-minlength="3" data-maxnlength="20" data-message="Please enter your email password"/>
                                                    <b className="tooltip tooltip-top-right"><i className="fa fa-lock txt-color-teal"/> Enter
                                                        your password</b> </label>

                                                <div className="note">
                                                    <a ui-sref="forgotPassword">Forgot password?</a>
                                                </div>
                                            </section>
                                            <section>
                                                <label className="checkbox">
                                                    <input type="checkbox" name="remember" defaultChecked={true}/>
                                                    <i/>Stay signed in</label>
                                            </section>
                                        </fieldset>
                                        <footer>
                                            <button type="submit" className="btn btn-primary">
                                                Sign in
                                            </button>
                                        </footer>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default Login
