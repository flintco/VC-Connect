import logo from './logo.svg';
import './App.css';
import React from 'react';
//import { render } from '../../api/app';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      apiResponse1: "",
      apiResponse2: "This is placeholder text",
      companyName: "",
      companyContact: "",
      companyIndustry: ""
    };

    //This binding is needed for this to work in callback
    this.callAPI1= this.callAPI1.bind(this);
    this.callAPI2 = this.callAPI2.bind(this);
    this.postCall = this.postCall.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
    this.handleIndustryChange = this.handleIndustryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  postCall(){
    const data = { 
      name: this.state.companyName,
      contact: this.state.companyContact,
      industry: this.state.companyIndustry
    };
    const postOptions = {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data)
    };

    fetch("http://localhost:9000/newStartup", postOptions)
    .then(res => {console.log(res)})
    //.then(res => this.setState({apiResponse2: res}));
  }

  callAPI1(){
    fetch("http://localhost:9000/findStartup")
      .then(res => res.text())
      .then(res => this.setState({apiResponse2: res}));
      //.then()
  }

  
  callAPI2(){
    fetch("http://localhost:9000/users")
      .then(res => res.text())
      .then(res => this.setState({apiResponse2: res}));
  }

  handleNameChange(event) {
    this.setState({companyName: event.target.value});
  }

  handleContactChange(event) {
    this.setState({companyContact: event.target.value});
  }

  handleIndustryChange(event) {
    this.setState({companyIndustry: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.companyName + ', Contact: ' + this.state.companyContact + ', Industry: ' + this.state.companyIndustry);
    this.postCall();
    event.preventDefault();
  }

  componentWillMount(){
    //this.postCall();
    //this.callAPI1();
    //this.callAPI2();
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p>{this.state.apiResponse1}</p>
        
        <h2>Add your company to the database</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Company Name:
            <input type="text" value={this.state.companyName} onChange={this.handleNameChange}/>
          </label>
          <label>
            Company Contact:
            <input type="text" value={this.state.companyContact} onChange={this.handleContactChange}/>
          </label>
          <label>
            Company Industry:
            <input type="text" value={this.state.companyIndustry} onChange={this.handleIndustryChange}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>

        <h2>Search for companies in the database</h2>
        <p>{this.state.apiResponse2}</p>
        <button onClick={this.callAPI1}>Click here</button>

      </div>
    );
  }
}

export default App;
