/**
 * Created by hydra320 on 2017/3/21.
 */

let React = require('react');
let ReactDOM = require('react-dom');

let AppComponent = require('./components/productBox.js');

ReactDOM.render(
    <AppComponent />,
    document.getElementById('content')
);