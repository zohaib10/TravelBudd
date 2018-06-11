import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Accordion, AccordionItem } from 'react-sanfona';
import { updateTasks, addNewCategory } from '../actions/index';
import { bindActionCreators } from 'redux';
import Popup from 'reactjs-popup';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: null,
      task: '',
      price: '',
      name: '',
      num: '',
      newCategory: ''
    };
  }

  handleTotalExpenses() {
    var totalPrice = 0;
    this.props.initialState.map(item => {
      if (item.id == this.props.location.pathname.split('/')[2]) {
        item.categories.map(ith => {
          totalPrice += parseInt(ith.totalPrice);
        });
      }
    });
    return totalPrice;
  }

  handleTotalLeft() {
    var amount = 0;
    var expenses = this.handleTotalExpenses();
    var budget = this.handleTotalBudget();
    amount = budget - expenses;
    return amount;
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

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

  handleTextChange = text => {
    this.setState({ task: text.target.value });
  };
  handlePriceChange = price => {
    this.setState({ price: price.target.value });
  };

  mapCategoryInformation(item, num) {
    var tasks = this.props.initialState[num].categories;
    for (var i = 0; i < tasks.length; i++) {
      if (tasks[i].name === item) {
        num = i;
      }
    }

    if (tasks[num].tasks.length > 0) {
      return (
        <ul className="collection">
          {tasks[num].tasks.map(ith => {
            return (
              <li className="collection-item">
                <div>
                  {ith.name}
                  <a href="#!" className="secondary-content">
                    ${ith.price}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      );
    }
  }

  getNewCategory = newCat => {
    this.setState({ newCategory: newCat.target.value });
  };

  mapCategories() {
    var num = -1;

    for (var i = 0; i < this.props.initialState.length; i++) {
      var item = this.props.initialState[i];
      if (item.id == this.props.location.pathname.split('/')[2]) {
        num = i;
      }
    }
    if (this.props.initialState.length > 0) {
      item = this.props.initialState[num].categories;

      return (
        <div
          className="product-listing1"
          onChange={() => this.setState({ num: num })}
        >
          {item.map(ith => {
            var name = ith.name;
            var totalPrice = ith.totalPrice;
            return (
              <ExpansionPanel
                expanded={this.state.expanded === `h${name}`}
                onChange={this.handleChange(`h${name}`)}
              >
                <ExpansionPanelSummary>
                  <div>
                    {name}
                    <a href="#!" className="secondary-content">
                      : ${totalPrice}
                    </a>
                  </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <div>
                    {this.mapCategoryInformation(name, num)}
                    <form
                      className="col s12"
                      onChange={() => this.setState({ name: name, num: num })}
                    >
                      <div className="row">
                        <div className="input-field col s6">
                          <input
                            placeholder="Task"
                            id="task"
                            type="text"
                            className="validate"
                            onChange={this.handleTextChange}
                          />
                        </div>
                        <div className="input-field col s6">
                          <input
                            id="price"
                            type="text"
                            className="validate"
                            placeholder="$Price"
                            onChange={this.handlePriceChange}
                          />
                        </div>
                      </div>
                      <Button
                        className="addButton"
                        variant="raised"
                        color="secondary"
                        onClick={() => this.props.updateTasks(this.state)}
                      >
                        Add
                      </Button>
                    </form>
                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            );
          })}
          <br />
          <Popup
            trigger={
              <Button variant="raised" color="secondary">
                Add Category
              </Button>
            }
            position="right center"
          >
            {close => (
              <div>
                <form>
                  <div className="input-field col s6">
                    <input
                      placeholder="Category Name"
                      id="newCat"
                      type="text"
                      className="validate"
                      onChange={this.getNewCategory}
                    />
                  </div>
                </form>
                <a className="close" onClick={close}>
                  <Button
                    variant="raised"
                    color="secondary"
                    onClick={() => this.props.addNewCategory(this.state)}
                  >
                    Add
                  </Button>
                </a>
              </div>
            )}
          </Popup>
        </div>
      );
    }
  }

  render() {
    const { expanded } = this.state;
    return (
      <div className="page-container">
        {this.mapCategories()}

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
              Total Expenses: <b>${this.handleTotalExpenses()}</b>
            </Typography>
            <br />
            <Typography className="budget-listing" component="p">
              Total Left to spend: <b>${this.handleTotalLeft()}</b>
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

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { updateTasks: updateTasks, addNewCategory: addNewCategory },
    dispatch
  );
}

// export default connect(mapStateToProps)(Landing);
export default connect(mapStateToProps, matchDispatchToProps)(Landing);
