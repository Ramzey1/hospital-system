import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

class App extends Component {

  state = {
    welcomeText: "Welcome to React"
  };

  componentDidMount() {
    $.ajax({
      context: this,
      url: "core/",
      method: "GET",
      data: {},
      success: function (data) {
        this.setState({welcomeText:data})
        console.log(data);
      },
      error: function (xhr, textStatus, error) {
        console.error("Reason: " + textStatus + " Status: " + xhr.status);
      },
      statusCode: {
        500: function (xhr) {
          alert("Internal server error has occurred");
          console.log(xhr);
        },
        404: function () {
          alert("Nothing found");
        },
        400: function () {
          alert("Bad request");
        },
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.welcomeText}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
