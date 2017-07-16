

var searchViewModel = function () {
    var self = this;
    self.availableCities = ko.observableArray();
    self.selectedCity = ko.observable();
    self.WeatherDetail = new WeatherDetail();
    self.errorMessage = ko.observable();
    self.showLoading = ko.observable(false);

    self.countryName = ko.observable();
    self.countryName.subscribe(function (newValue) {
        self.showLoading(true);
        $.getJSON('/Home/GetCitiesByCountry', { countryName: newValue }, function (response) {
            self.showLoading(false);
            if (response.cities) {
                if (response.cities.length === 0) {
                    self.errorMessage("No City Found");
                } else {
                    self.errorMessage("");
                }
                self.availableCities(response.cities);
            }
        });
    });

    self.selectedCity.subscribe(function (newValue) {
        var countryName = self.countryName();
        self.showLoading(true);
        //if using the default one, then no need to load the weahter
        if (newValue !== 'undefined' && newValue !== null) {

            $.getJSON('/Home/GetWeatherByCity', { cityName: newValue, countryName: countryName }, function (response) {
                self.showLoading(false);
                if (response) {
                    self.WeatherDetail.location(response.cityWeather.Location);
                    self.WeatherDetail.time(response.cityWeather.Time);
                    self.WeatherDetail.wind(response.cityWeather.Wind);
                    self.WeatherDetail.visibility(response.cityWeather.Visibility);
                    self.WeatherDetail.skyCondition(response.cityWeather.SkyConditions);
                    self.WeatherDetail.temperature(response.cityWeather.Temperature);
                    self.WeatherDetail.dewpoint(response.cityWeather.DewPoing);
                    self.WeatherDetail.humidity(response.cityWeather.Humidity);
                    self.WeatherDetail.pressure(response.cityWeather.Pressure);
                }
            });
        }
    });

    return self;

};

var WeatherDetail = function () {
    var self = this;
    self.location = ko.observable();
    self.time = ko.observable();
    self.wind = ko.observable();
    self.visibility = ko.observable();
    self.skyCondition = ko.observable();
    self.temperature = ko.observable();
    self.dewpoint = ko.observable();
    self.humidity = ko.observable();
    self.pressure = ko.observable();
};

