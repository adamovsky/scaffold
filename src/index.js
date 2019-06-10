import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import ScrollToTop from './components/ScrollToTop';

import './utilities/env';

import * as serviceWorker from './serviceWorker';

import './index.scss';

ReactDOM.render(
    <Router>
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </Router>,

    document.getElementById('root')
);

serviceWorker.unregister();
