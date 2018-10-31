import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import categoryReducer from './reducer/category-reducer';
import thunk from './middleware/redux-thunk';

export default () => {
  return createStore(categoryReducer,
    composeWithDevTools(applyMiddleware(thunk)));
};
