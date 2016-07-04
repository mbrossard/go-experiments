import React from 'react'
import {render} from 'react-dom'
import {Router} from 'react-router'

import Routes from './Routes.jsx';

var rootInstance = render((
    <Router>
        {Routes}
    </Router>
), document.getElementById('wrapper'));
