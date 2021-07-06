import React from 'react';

class Startup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          companyName: "",
          companyContact: "",
          companyIndustry: "Tech"
        };

        this.postCall = this.postCall.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleContactChange = this.handleContactChange.bind(this);
        this.handleIndustryChange = this.handleIndustryChange.bind(this);
        this.handleNewCompanySubmit = this.handleNewCompanySubmit.bind(this);
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

    componentWillMount(){}

    render(){
        return(
            <div>
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
            </div>
        )
    }
}

export default Startup;