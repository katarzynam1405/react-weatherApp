var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <Link to="/">Weather</Link>
        <Link to="/About">About</Link>
        <Link to="/Examples">Examples</Link>
      </div>
    )
  }
});

module.exports = Nav;
