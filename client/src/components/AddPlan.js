import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';
import { addPlace } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';

class AddPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment(),
      address: '',
      id: '',
      budget: ''
    };

    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
  }

  handleStartChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleBudgetChange = budget => {
    this.setState({ budget: budget.target.value });
  };

  handleEndChange(date) {
    this.setState({
      endDate: date
    });
    if (date.isBefore(this.state.startDate)) {
      alert('Invalid date range! \n Select a new Date');
      this.setState({
        startDate: moment(),
        endDate: moment()
      });
    }
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({ id: latLng.lat }))
      .catch(error => console.error('Error', error));
  };

  render() {
    return (
      <div className="container">
        <br />
        <h5 className="green lighten-5">Start Planning on Travelbudd</h5>
        <br />
        <form>
          <div className="row">
            <label className="col s6 ">
              Where:
              <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: 'Search Places ...',
                        className: 'location-search-input'
                      })}
                    />
                    <div className="autocomplete-dropdown-container ">
                      {suggestions.map(suggestion => {
                        const className = suggestion.active
                          ? 'suggestion-item--active'
                          : 'suggestion-item';
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                          : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style
                            })}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </label>

            <label className="col s6 fixed">
              Budget:
              <input
                placeholder="In Dollars"
                id="budget"
                className="validate"
                onChange={this.handleBudgetChange}
              />
            </label>
          </div>
          <div className="row ">
            <label className="col s6 fixed">
              From:
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleStartChange}
              />
            </label>
            <label className="col s6">
              To:
              <DatePicker
                selected={this.state.endDate}
                onChange={this.handleEndChange}
              />
            </label>
          </div>

          <Link to="/" className="left waves-effect btn green lighten-1">
            Cancel
          </Link>

          <Link
            to="/"
            className="right waves-effect btn green lighten-1"
            onClick={() => this.props.addPlace(this.state)}
          >
            Plan
          </Link>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    initialState: state
  };
};

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addPlace: addPlace }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(AddPlan);
