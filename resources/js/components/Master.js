import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Master extends Component {
  render(){
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="nav-link" to="/">Demo single page app</Link>
            </div>
            <ul className="nav navbar-nav">
              <li><Link className="nav-link" to="/list-product">LIST ITEM</Link></li>
              <li><Link className="nav-link" to="/create">CREATE</Link></li>
              <li><Link className="nav-link" to="/edit:id">EDIT</Link></li>
              <li><Link className="nav-link" to="/delete">DELETE</Link></li>
            </ul>
          </div>
      </nav>
          <div>
            
          </div>
      </div>
    )
  }
}

export default Master;