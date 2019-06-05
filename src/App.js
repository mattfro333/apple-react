import React, { Component } from 'react';
import {connect} from 'react-redux';
import {logInUser} from './redux/user';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newUserName: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.props.logInUser(this.state.newUserName);
  }

  handleChange(event) {
    this.setState({
      newUserName: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>Welcome to React</h2>
        </div>
        <h1>Logged In as: {this.props.userName}</h1>
        <input onChange={this.handleChange} value={this.state.newUserName}/>
        <button onClick={this.handleClick}>Log In</button>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userName: state.userName
  };
}

const mapDispatchToActionProviders = {
  logInUser: logInUser
};

export default connect(mapStateToProps, mapDispatchToActionProviders)(App);
