import React from 'react'

let Menu = React.createClass({
    getInitialState: function() {
        return {
            "entries": [
                {
                    "id": "dashboard",
                    "link": "#",
                    "name": "Dashboard",
                    "icon": "fa-dashboard",
                },
                {
                    "id": "services",
                    "name": "Services",
                    "icon": "fa-globe",
                    "content": [
                        { "name": "Service 1" },
                        { "name": "Service 2" },
                        { "name": "Service 3" }
                    ]
                },
                {
                    "id": "profile",
                    "name": "Profile",
                    "icon": "fa-user",
                    "content": [
                        { "name": "Profile 1" },
                        { "name": "Profile 2" },
                        { "name": "Profile 3" }
                    ]
                },
                {
                    "id": "users",
                    "name": "Users",
                    "icon": "fa-users",
                    "content": [
                        { "name": "User 1" },
                        { "name": "User 2" },
                        { "name": "User 3" }
                    ]
                },
                {
                    "id": "counter",
                    "link": "#/counter",
                    "name": "Counter",
                    "icon": "fa-clock-o"
                },
                {
                    "id": "signout",
                    "link": "#/login",
                    "name": "Logout",
                    "icon": "fa-sign-out"
                }
            ]
        }
    },
    renderMenuSubEntry: function(entry, i) {
        return <li>{entry.name}</li>
    },
    renderMenuEntry: function(entry, i) {
        if(entry.content) {
            return <li id={entry.id}>
                <a href="#" data-toggle="collapse" data-target={ "#sidebar" + i}>
                  <i className={"fa " + entry.icon + " fa-fw"}></i> {entry.name} <span className="fa arrow"></span>
                </a>
                <ul id={ "sidebar" + i } className="nav nav-second-level collapse">
                  {entry.content.map(this.renderMenuSubEntry)}
                </ul>
              </li>
        } else {
            return <li>
                <a href={entry.link}>
                  <i className={"fa " + entry.icon + " fa-fw"}></i> {entry.name}
                </a>
              </li>
        }
    },
    render: function () {
        return <div className="navbar-default sidebar" role="navigation">
          <div className="sidebar-nav">
            <ul className="nav" id="side-menu">
              {this.state.entries.map(this.renderMenuEntry)}
            </ul>
          </div>
        </div>
    }
});

export default Menu
