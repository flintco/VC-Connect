import logo from './logo.svg';
import './App.css';
import React from 'react';
//import { render } from '../../api/app';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      apiResponse1: "This is a placeholder",
      apiResponse2: "This is placeholder text",
      companyName: "",
      companyContact: "",
      companyIndustry: "",
      companyType: "Tech"
    };

    //This binding is needed for this to work in callback
    this.callAPI1= this.callAPI1.bind(this);
    this.callAPI2 = this.callAPI2.bind(this);
    this.postCall = this.postCall.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
    this.handleIndustryChange = this.handleIndustryChange.bind(this);
    this.handleNewCompanySubmit = this.handleNewCompanySubmit.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleTypeSubmit = this.handleTypeSubmit.bind(this);
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
   var industryParameter = "Tech";
    //this.setState({apiResponse1: "Hello"});
    var callWithIndustry = "http://localhost:9000/findStartup/" + industryParameter;
    console.log(callWithIndustry);
    fetch(callWithIndustry)
      .then(res => res.text())
      //.then(this.setState({apiResponse1: "Hello"}))
      .then(res => this.setState({apiResponse1: res}));
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

  handleNewCompanySubmit(event) {
    alert('A name was submitted: ' + this.state.companyName + ', Contact: ' + this.state.companyContact + ', Industry: ' + this.state.companyIndustry);
    this.postCall();
    event.preventDefault();
  }

  handleTypeChange(event){
    this.setState({companyType: event.target.value});
  }

  handleTypeSubmit(event){
    event.preventDefault();
    //this.callAPI1();
    //alert("Your list of companies has been updated");
  }

  componentWillMount(){}

  render(){
    return (
      <div className="App">
        <h2>Add your company to the database</h2>
        <form onSubmit={this.handleNewCompanySubmit}>
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
        
        <form onSubmit={this.handleTypeSubmit}>
          <label>
            Choose your company type
            <select value={this.state.companyType} onChange={this.handleTypeChange}>
              <option value="Tech">Tech</option>
              <option value="Insurance">Insurance</option>
              <option value="Food">Food</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
          <button onClick={this.callAPI1}>Submit API</button>
        </form>

        <p>{this.state.apiResponse1}</p>
        <br></br>
      </div>
    );
  }
}

export default App;
