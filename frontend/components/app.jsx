var React = require("react");
var SessionActions = require("../actions/session_actions");
var SessionStore = require("../stores/session_store");
var Nav = require("./nav/nav");

var App = React.createClass({
  getInitialState: function () {
    return this.getStateFromStore();
  },

  getStateFromStore: function () {
    return {
      isLoggedIn: SessionStore.isLoggedIn(),
      email: SessionStore.getEmail()
    };
  },

  componentDidMount: function () {
    this.listenerToken = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  _onChange: function () {
    if (SessionStore.isLoggedIn) {
      this.props.history.pushState(null, "/", {});
    }

    this.setState(this.getStateFromStore());
  },

  render: function () {
    return (
      <div className="app">
        <Nav isLoggedIn={ this.state.isLoggedIn }
          email={ this.state.email } />

        { this.props.children }
      </div>
    );
  }
});

module.exports = App;