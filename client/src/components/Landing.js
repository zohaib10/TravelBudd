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

  render() {
    const { expanded } = this.state;
    return (
      <div className="page-container">
        <div className="product-listing1">
          <ExpansionPanel className="E1" onChange={this.handleChange('panel1')}>
            <ExpansionPanelSummary>
              <Typography>Transportation</Typography>
              <Typography className="TP">
                <b>: $800</b>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <Button
                  variant="fab"
                  right="true"
                  mini
                  color="secondary"
                  aria-label="add"
                >
                  <AddIcon onChnage={this.transpotationAdd()} />
                </Button>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === 'panel2'}
            onChange={this.handleChange('panel2')}
          >
            <ExpansionPanelSummary>
              <Typography>Accomodations</Typography>
              <Typography>
                <b>: $800</b>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === 'panel3'}
            onChange={this.handleChange('panel3')}
          >
            <ExpansionPanelSummary>
              <Typography>Food & Drink</Typography>
              <Typography>
                <b>: $800</b>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === 'panel4'}
            onChange={this.handleChange('panel4')}
          >
            <ExpansionPanelSummary>
              <Typography>Activities</Typography>
              <Typography>
                <b>: $800</b>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
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
