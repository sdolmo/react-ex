var React = require('react');

var SidebarInfo = React.createClass({
  render: function (){
    return (
      <div>
        <p>{this.props.heading}</p>
        <h4>{this.props.num}</h4>
      </div>
    );
  }
})

module.exports = SidebarInfo;
