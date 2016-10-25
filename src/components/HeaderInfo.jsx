var React = require('react');

var HeaderInfo = React.createClass({
  render: function(){
    return (
      <div>
      <h3>{this.props.heading}</h3>
      <p>{this.props.description}</p>
      </div>
    );
  }
});

module.exports = HeaderInfo;
