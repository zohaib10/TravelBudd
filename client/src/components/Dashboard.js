import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button
        variant="fab"
        color="primary"
        aria-label="add"
        className={classes.button}
      >
        +
      </Button>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

class Dashboard extends Component {
  mapListItems() {
    if (this.props.initialState !== undefined) {
      return this.props.initialState.map(item => {
        return (
          <Link
            to={{
              pathname: '/trip/' + item.id
            }}
            className="collection-item"
          >
            {item.address}
          </Link>
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
  console.log('state changed: ', state);
  return { initialState: state };
};

// export default withStyles(styles)(FloatingActionButtons);

export default connect(mapStateToProps)(withStyles(styles)(Dashboard));
