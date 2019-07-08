import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import FormPage from '../src/Components/form';
//import Testform from "../src/Components/testform";
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../src/store/reducer/reducer";


const store =createStore(reducer);


ReactDOM.render(<Provider store={store}>< FormPage /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
