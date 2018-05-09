import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper green lighten-1">
          <Link to="/" className="brand-logo center">
            TravelBudd
          </Link>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
