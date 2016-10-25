var React = require('react');

var SpreadInfo = React.createClass({
  render: function(){
    return (
      <div>
        <h3>{this.props.num}</h3>
        <p>{this.props.comment}</p>
      </div>
    );
  }
})

module.exports = SpreadInfo;
