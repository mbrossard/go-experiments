import React from 'react'

let Navbar = React.createClass({
    getInitialState: function() {
        return {
            "entries": [
                {
                    "icon": "fa-user",
                    "link": "#",
                    "content": [
                        {
                            "icon": "fa-sign-out",
                            "text": "Logout",
                            "link": "#/login"
                        }                        
                    ]
                }
            ]
        }
    },
    renderNavSubEntry: function(entry, i) {
    },
    renderNavEntry: function(entry, i) {
        return <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="{entry.link}">
              <i className={"fa " + entry.icon + " fa-fw"}></i>  <i className="fa fa-caret-down"></i>
            </a>
        </li>
    },
    render: function () {
        return <nav className="navbar navbar-default navbar-static-top" role="navigation">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">
                <i className="fa fa-lg fa-rocket" aria-hidden="true"></i>
              </a>
            </div>

            <ul className="nav navbar-top-links navbar-right">
              {this.state.entries.map(this.renderNavEntry)}
            </ul>
          </nav>;
    }
});

export default Navbar
