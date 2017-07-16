
import React, { Component } from 'react';
import { connect } from 'react-redux';

class CountryCity extends Component {

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
        <div className="weatherSearchContainer">
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
export default connect(null, null)(CountryCity);
