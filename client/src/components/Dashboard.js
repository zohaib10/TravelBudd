import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Dashboard extends Component {
  mapListItems() {
    if (this.props.initialState != undefined) {
      return this.props.initialState.map(item => {
        return (
          <a href={item.id} className="collection-item">
            {item.address}
          </a>
        );
      });
    }
    return;
  }

  render() {
    return (
      <div className="container">
        <div className="collection">{this.mapListItems()}</div>
        <div className="fixed-action-btn">
          <Link
            to="plan/add"
            className="btn-floating btn-large green lighten-1"
          >
            <i className="large material-icons">+</i>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { initialState: state };
};

export default connect(mapStateToProps)(Dashboard);

/*

<a href="#!" className="collection-item">
  Venice, Italy
</a>
<a href="#!" className="collection-item">
  Valletta, Malta
</a>
<a href="#!" className="collection-item">
  Nice, France
</a>
<a href="#!" className="collection-item">
  Durban, South Africa
</a>
*/
