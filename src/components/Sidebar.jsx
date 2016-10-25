var React = require('react');
var SidebarInfo = require('./SidebarInfo.jsx');

var Sidebar = React.createClass({
  render: function(){

    var containerStyle = {
    }

    var infoStyle = {
      height: 130
    }

    return (
      <div style={containerStyle}>
        <div style={infoStyle} className="thumbnail">
          <div className="row">
            <div className="col-xs-6">
              <SidebarInfo heading={this.props.header} num={this.props.value} />
            </div>
          </div>
        </div>
      </div>
    );
  }
})

module.exports = Sidebar;
