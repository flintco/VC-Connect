import './App.css';
import React from 'react';
//import { render } from '../../api/app';
import './testData.json';
import VC from './VC';
import Startup from './Startups';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Nav from './Nav';

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
  }

  componentWillMount(){}

  render(){
    return (
      <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route exact path='/'>

          <div>
            <Link to="/vc">I am an investor</Link>
          </div>

          <div>
            <Link to="/startup">I am a part of a startup</Link>
          </div>

        </Route>

        <Route path='/vc'>
          <VC />
        </Route>

        <Route path='/startup'>
          <Startup />
        </Route>

        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
