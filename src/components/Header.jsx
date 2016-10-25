var React = require('react');
var HeaderInfo = require('./HeaderInfo.jsx');

var Header = React.createClass({
  render: function(){
    var containerStyle = {
      height: 40,
      marginTop: 20,
      background: '',
      textAlign: 'center'
    };

    var infoStyle = {

    };

    return (
      <div style={containerStyle}>
        <div style={infoStyle} className="thumbnail">
          <HeaderInfo heading={this.props.header} description={this.props.content}/>
        </div>
      </div>
    );
  }
});

module.exports = Header;
