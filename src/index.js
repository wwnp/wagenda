import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import App from "./App";
import './index.css'
import { ContexProvider } from "./contex/contex";

// import { createStore, applyMiddleware, compose } from 'redux'
// import reduxThunk from 'redux-thunk'
// import rootReducer from './redux/rootReducer';
// import { Provider } from 'react-redux';

// const composeEnhancers =
//   typeof window === 'object' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose; // DEVTOOLS

// const loggerMiddleware = store => next => actions => {
//   const result = next(actions)
//   // console.log('Middleware', store.getState())
//   return result
// }

// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(
//   loggerMiddleware,
//   reduxThunk
// )))

const app = (
  <ContexProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContexProvider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);