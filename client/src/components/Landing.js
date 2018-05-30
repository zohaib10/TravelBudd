import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

class Landing extends React.Component {
  state = {
    expanded: null
  };

  handleExpand(e) {
    console.log('Hi');

    // var coll = document.getElementsByClassName('collapsible');
    // var i;
    //
    // for (i = 0; i < coll.length; i++) {
    //   coll[i].addEventListener('click', function() {
    //     this.classList.toggle('active');
    //     var content = this.nextElementSibling;
    //     if (content.style.maxHeight) {
    //       content.style.maxHeight = null;
    //     } else {
    //       content.style.maxHeight = content.scrollHeight + 'px';
    //     }
    //   });
    // }
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  transpotationAdd() {
    console.log('hi');
  }

  handleTotalBudget() {
    var bud = 0;
    this.props.initialState.map(item => {
      if (item.id == this.props.location.pathname.split('/')[2]) {
        bud = item.budget;
      }
    });
    return bud;
  }

  handleLocation() {
    var add = 'Hawaii';
    this.props.initialState.map(item => {
      if (item.id == this.props.location.pathname.split('/')[2]) {
        add = item.address;
      }
    });
    return add;
  }

  handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  render() {
    const { expanded } = this.state;
    return (
      <div className="page-container">
        <div className="product-listing1">
          <a href="#" onClick={this.handleClick}>
            Click me
          </a>
          <a href="#" onClick={this.handleExpand()}>
            <button className="collapsible">Open Section 1</button>
          </a>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <button className="collapsible">Open Section 2</button>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <button className="collapsible">Open Section 3</button>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className="product-listing2">
          <Paper className="Paper1" elevation={4}>
            <br />
            <Typography variant="headline" component="h1">
              {this.handleLocation()}
            </Typography>
            <br />
            <Typography className="budget-listing" component="p">
              Total Budget: <b>${this.handleTotalBudget()}</b>
            </Typography>
            <br />
            <Typography className="budget-listing" component="p">
              Total Expenses: <b>$3000</b>
            </Typography>
            <br />
            <Typography className="budget-listing" component="p">
              Total Left to spend: <b>$3000</b>
            </Typography>
            <br />
            <ExpansionPanel
              expanded={expanded === 'panel10'}
              onChange={this.handleChange('panel10')}
            >
              <ExpansionPanelSummary>
                <Typography>Currency Exchange Rate</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Paper>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state changed Landing: ', state);
  return { initialState: state };
};

export default connect(mapStateToProps)(Landing);
