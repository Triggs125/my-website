import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from "react-intl";
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducers';
import reportWebVitals from './reportWebVitals';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './pages/Home';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

document.body.style.backgroundColor = theme.palette.background.default;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    {/* <Provider store={store}> */}
      <IntlProvider locale="en">
        <Home />
      </IntlProvider>
    {/* </Provider> */}
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
