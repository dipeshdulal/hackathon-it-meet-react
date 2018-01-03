import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './components/MainComponent';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux';
import store from './store';


ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <MainComponent />
        </MuiThemeProvider>
    </Provider>
, document.getElementById('root'));

registerServiceWorker();
