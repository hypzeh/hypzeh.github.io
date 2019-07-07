import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.append(root);

ReactDOM.render(<App />, root);
