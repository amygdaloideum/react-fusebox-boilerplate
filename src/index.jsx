import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './lib';
import 'minireset.css/minireset.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@gloot/icons/dist/icons.css';
import '@gloot/fonts/stratum.css';

ReactDOM.render(<App />, document.getElementById('app-container'));
