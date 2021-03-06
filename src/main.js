import React from 'react'; // ES6
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app/app';
import createStore from './create-store';
import '../style/main.scss';

const store = createStore();

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<Provider store={store}><App/></Provider>, rootNode);
