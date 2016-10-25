var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/Header.jsx');

ReactDOM.render(<Header
  header='20'
  content='New followers added this month'/>, document.getElementById('header1'));
ReactDOM.render(<Header
  header='$ 10905'
  content='Average Monthly Income'/>, document.getElementById('header2'));
ReactDOM.render(<Header
  header='$ 130865'
  content='Yearly Income Goal'/>, document.getElementById('header3'));
ReactDOM.render(<Header
  header='65'
  content='Paris'/>, document.getElementById('header4'));
