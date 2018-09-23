import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

class App extends Component {

  state = {
    message: ""
  };

  componentDidMount() {
    $.ajax({
      "url": "",
      method: "GET",
      data: {},
      "success": function(data) {
        this.setState({message: data});
      }

    });
  }
  


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.message}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
