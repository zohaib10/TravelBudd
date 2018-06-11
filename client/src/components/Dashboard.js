import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class Dashboard extends Component {
  mapListItems() {
    if (this.props.initialState.length !== 0) {
      console.log('going in the if');
      return this.props.initialState.map(item => {
        if (item.length == 0) {
          return;
        }
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
    } else {
      return (
        <div>
          <h2>Welcome to TravelBudd!</h2>
          <br />
          <br />
          <div class="explainFeatures">
            <div class="img-with-text">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1HKkqYhof3jMwXJvmgglpuYkBp4nzn6H4rahcNiFPgCpFFqNA"
                height="200"
              />
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                commodo, dolor quis imperdiet consectetur, leo.
              </h5>
            </div>
            <div class="img-with-text">
              <img
                src="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1434727/1160/772/m1/fpnw/wm0/money-bag-icon-flat-01-.jpg?1467978237&s=449288bbf1e0dfb5c584b17d46b302a3"
                height="200"
              />
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                commodo, dolor quis imperdiet consectetur, leo.
              </h5>
            </div>
            <div class="img-with-text">
              <img
                src="https://cdn0.iconfinder.com/data/icons/hotel-icons-rounded/110/Hotel-512.png"
                height="200"
              />
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                commodo, dolor quis imperdiet consectetur, leo.
              </h5>
            </div>
          </div>
          <br />
          <h5 align="center">
            To get started, click{' '}
            <Link to="plan/add">
              <a>here</a>
            </Link>{' '}
            or the red button on the bottom right corner.
          </h5>
        </div>
      );
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
