import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Redux/index';
import thunk from 'redux-thunk';


//const store = applyMiddleware()(createStore);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
const App = () => {
  return(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}



ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'));