import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize-css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import data from './components/data';

ReactDOM.render(<App data={data} />, document.getElementById('root'));
registerServiceWorker();
