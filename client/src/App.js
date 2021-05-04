import logo from './logo.svg';
import './App.css';
import React from 'react';
//import { render } from '../../api/app';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      apiResponse1: "",
      apiResponse2: "This is placeholder text"
    };

    //This binding is needed for this to work in callback
    this.callAPI2 = this.callAPI2.bind(this);
    this.postCall = this.postCall.bind(this);
  }

  

  postCall(){
    const text = "hello";
    const data = { text };
    const postOptions = {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data)
    };

    fetch("http://localhost:9000/newCard", postOptions)
    .then(res => {console.log(res)})
    //.then(res => this.setState({apiResponse2: res}));
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
    //this.callAPI2();
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p>{this.state.apiResponse1}</p>
        <p>{this.state.apiResponse2}</p>
        <button onClick={this.postCall}>Click here to send API call</button>
      </div>
    );
  }
}

export default App;
