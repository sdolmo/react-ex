var React = require('react');
var SpreadInfo = require('./SpreadInfo.jsx');

var Spread = React.createClass({
  render: function() {
    var containerStyle = {
        height: 300
    }

    return (
      <div style={containerStyle} className="thumbnail">
        <div className="">
          <SpreadInfo num={this.props.number} comment={this.props.description} />
        </div>
      </div>
    );
  }
})

module.exports = Spread;
