import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import { getCountry, getCityByCountry } from '.././actions/cityCountryAction';
import ccscss from './CountryCity.scss';

class CountryCity extends Component {

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const defaultC = this.props.defaultCountry;
    return (
        <div className={classnames(ccscss.weatherSearchContainer, 'container')}>
            <div className="row searchToolbar">
                <div className="col-md-4">
                    <input type="text" placeholder="Country Name" className="countryName" />
                </div>
                <div className="col-md-6">
                    <select className="cityName"></select>
                </div>
                <div className="col-md-2">
                    <span className="errorMessage"></span>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Weather Detail</div>

                        <ul className="list-group" data-bind="with: WeatherDetail">
                            <li className="list-group-item"><b>Location:</b> </li>
                            <li className="list-group-item"><b>Time:</b> </li>
                            <li className="list-group-item"><b>Wind: </b></li>
                            <li className="list-group-item"><b>Visibility:</b> </li>
                            <li className="list-group-item"><b>Sky conditions:</b> </li>
                            <li className="list-group-item"><b>Temperature:</b> </li>
                            <li className="list-group-item"><b>Dew Poing:</b> </li>
                            <li className="list-group-item"><b>Relative Humidity:</b> </li>
                            <li className="list-group-item"><b>Pressure:</b> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

CountryCity.propTypes = {
  defaultCountry: PropTypes.string,
  getCountry: PropTypes.func,
  getCityByCountry: PropTypes.func
};

function mapStateToProps(state) {
  return {
    defaultCountry: state.cityCountry.defaultCountry
  };
}


function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getCountry, getCityByCountry }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CountryCity);
