import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import { getCityWeather, getCityByCountry } from '.././actions/cityCountryAction';
import ccStyle from './countryCity.scss';

export class CountryCity extends Component {

  constructor(props) {
    super(props);
    this.state = {
      country: '',
      selectedCity: ''
    };
  }

  getCityByCountry(e) {
    this.setState({ country: e.target.value });
    const payload = {
      country: e.target.value
    };
    this.props.getCityByCountry(payload);
  }

  handleCityChange(e) {
    this.setState({ selectedCity: e.target.value });
    const payload = {
      country: this.state.country,
      city: e.target.value
    };
    this.props.getCityWeather(payload);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  renderWeather(weather) {
    if (!weather) {
      return null;
    }
    return (
      <ul className="list-group" data-bind="with: WeatherDetail">
        <li className="list-group-item"><b>Location: {weather.location}</b> </li>
        <li className="list-group-item"><b>Time:</b> {weather.time}</li>
        <li className="list-group-item"><b>Wind:</b> {weather.wind}</li>
        <li className="list-group-item"><b>Visibility:</b> {weather.visibility}</li>
        <li className="list-group-item"><b>Sky conditions:</b> {weather.skyConditions}</li>
        <li className="list-group-item"><b>Temperature:</b> {weather.temperature} </li>
        <li className="list-group-item"><b>Dew Poing:</b> {weather.dewPoing} </li>
        <li className="list-group-item"><b>Relative Humidity:</b> {weather.humidity} </li>
        <li className="list-group-item"><b>Pressure:</b> {weather.pressure} </li>
      </ul>
    );
  }

  render() {
    const cities = this.props.cities;
    const weather = this.props.weather;
    return (
        <div className={classnames(ccStyle.weatherSearchContainer, 'container')}>
            <div className={classnames(ccStyle.searchToolbar, 'row')}>
                <div className="col-md-4">
                    <input type="text" placeholder="Country Name" className="countryName" onBlur= {(e) => this.getCityByCountry(e)} />
                </div>
                <div className="col-md-6">
                    <select className="cityName" onChange={(e) => this.handleCityChange(e)} value={this.state.selectedCity} >
                      {cities.map(d => {
                        return <option key={d}>{d}</option>;
                      })}
                    </select>
                </div>
                <div className="col-md-2">
                    <span className="errorMessage"></span>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Weather Detail</div>
                        {this.renderWeather(weather)}
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

CountryCity.propTypes = {
  cities: PropTypes.array,
  weather: PropTypes.object,
  getCityByCountry: PropTypes.func,
  getCityWeather: PropTypes.func
};

function mapStateToProps(state) {
  return {
    cities: state.cityCountry.cities,
    weather: state.cityCountry.weather
  };
}


function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getCityWeather, getCityByCountry }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CountryCity);
