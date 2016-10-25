var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/Header.jsx');
var Sidebar = require('./components/Sidebar.jsx');
var Spread = require('./components/Spread.jsx');

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
  center={true}
  content='Paris'/>, document.getElementById('header4'));
ReactDOM.render(<Sidebar
  header='New visitors'
  value='1.5k' />, document.getElementById('sidebar1'));
ReactDOM.render(<Sidebar
  header="Bounce Rate"
  value="50%" />, document.getElementById('sidebar2'));
ReactDOM.render(<Sidebar
  header="Searchs"
  value="28%" />, document.getElementById('sidebar3'));
ReactDOM.render(<Sidebar
  header="Traffic"
  value="140.5 kb" />, document.getElementById('sidebar4'));
ReactDOM.render(<Spread
  number="15080"
  description="Shot Views" />, document.getElementById('spread1'));
  ReactDOM.render(<Spread
    number="15080"
    description="Shot Views" />, document.getElementById('spread2'));
