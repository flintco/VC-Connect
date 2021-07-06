import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/vc">For Investors</Link>
                        <Link to="/startup">For Startups</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav;