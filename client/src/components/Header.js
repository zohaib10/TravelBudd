import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="header nav-wrapper lighten-2">
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
