import React from 'react';

class VC extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            companyList: "",
            companyType: "Tech"
        };

        //This binding is needed for this to work in callback
        this.getStartups = this.getStartups.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleTypeSubmit = this.handleTypeSubmit.bind(this);
    }

    getStartups(){
        var callWithIndustry = "http://localhost:9000/findStartup/" + this.state.companyType;
        //console.log(callWithIndustry);
        fetch(callWithIndustry)
          .then(res => res.text())
          .then(res => this.setState({companyList: res}));
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
        return(
            <div>
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

        <p>{this.state.companyList}</p>
        <br></br>
        <button onclick="mapFunc()">Map</button>
            </div>
        )
    }
}

export default VC;