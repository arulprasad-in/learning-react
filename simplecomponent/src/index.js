import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Welcome name="arul" />, document.getElementById('root'));
registerServiceWorker();
