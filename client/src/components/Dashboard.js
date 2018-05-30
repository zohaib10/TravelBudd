import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class Dashboard extends Component {
  mapListItems() {
    if (this.props.initialState !== undefined) {
      return this.props.initialState.map(item => {
        return (
          <div>
            <Link
              to={{
                pathname: '/trip/' + item.id
              }}
              className="collection-item"
            >
              {item.address}
            </Link>
          </div>
        );
      });
    }
    return;
  }

  render() {
    return (
      <div className="container">
        <div className="collection">{this.mapListItems()} </div>
        <div className="fixed-action-btn">
          <Link to="plan/add">
            <Button variant="fab" color="secondary" aria-label="add">
              <AddIcon />
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log('state changed: ', state);
  return { initialState: state };
};

export default connect(mapStateToProps)(Dashboard);
