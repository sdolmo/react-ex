var React = require('react');
var HeaderInfo = require('./HeaderInfo.jsx');

var Header = React.createClass({
  render: function(){
    var containerStyle = {
      height: 40,
      marginTop: 10,
      background: '',
      textAlign: ''
    };

    var infoStyle = {
      height: 150
    };

    if(this.props.center){
      containerStyle.textAlign = "center";
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
