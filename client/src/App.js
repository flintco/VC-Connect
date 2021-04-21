import logo from './logo.svg';
import './App.css';
import React from 'react';
//import { render } from '../../api/app';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      apiResponse1: "",
      apiResponse2: ""
    };
  }

  postCall(){
    const postOptions = {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: {
          title: "Hello"
      }
    };
    fetch("http://localhost:9000/", postOptions)
  }

  callAPI1(){
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({apiResponse1: res}));
  }

  callAPI2(){
    fetch("http://localhost:9000/users")
      .then(res => res.text())
      .then(res => this.setState({apiResponse2: res}));
  }

  componentWillMount(){
    this.postCall();
    this.callAPI1();
    this.callAPI2();
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p>{this.state.apiResponse1}</p>
        <p>{this.state.apiResponse2}</p>
      </div>
    );
  }
}

export default App;
