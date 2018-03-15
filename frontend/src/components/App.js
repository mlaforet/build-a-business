import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../styles/App.css';
import { setToken } from '../actions/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { token: null };
    this.props.setToken();
  }
  render() {
    return (
      <div>
        <p>Hello!</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { token: state.setToken };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setToken: setToken }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);