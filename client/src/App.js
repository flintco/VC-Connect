import './App.css';
import React from 'react';
//import { render } from '../../api/app';
import './testData.json';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      apiResponse1: "",
      companyName: "",
      companyContact: "",
      companyIndustry: "Tech",
      companyType: "Tech"
    };

    //This binding is needed for this to work in callback
    this.getStartups = this.getStartups.bind(this);
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
  }

 getStartups(){
    var callWithIndustry = "http://localhost:9000/findStartup/" + this.state.companyType;
    //console.log(callWithIndustry);
    fetch(callWithIndustry)
      .then(res => res.text())
      .then(res => this.setState({apiResponse1: res}));
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
    this.postCall();
    this.setState({companyName: ""});
    this.setState({companyContact: ""})
    alert(this.state.companyName + ' has been added to the database.');
    event.preventDefault();
  }

  handleTypeChange(event){
    this.setState({companyType: event.target.value});
  }

  handleTypeSubmit(event){
    this.getStartups();
    event.preventDefault();
  }

  mapFunc(){}

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
            <select value={this.state.companyIndustry} onChange={this.handleIndustryChange}>
              <option value="Tech">Tech</option>
              <option value="Insurance">Insurance</option>
              <option value="Food">Food</option>
            </select>
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
        </form>

        <p>{this.state.apiResponse1}</p>
        <br></br>
        <button onclick="mapFunc()">Map</button>
      </div>
    );
  }
}

export default App;
