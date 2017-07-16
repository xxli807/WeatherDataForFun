using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Weather.WebServices;
using Weather.WebServices.Models;

namespace Weather.Services
{
    public class CityWeatherService : ICityWeatherService
    {

        public async Task<List<Table>> GetCitiesByCountryName(string countryName)
        {
            CityWeatherServiceClient client = new CityWeatherServiceClient();
            return await client.GetWeatherByCountryName(countryName);
        }


        public async Task<CityWeather> GetWatherByCityCountryName(string cityName, string countryName)
        {
            CityWeatherServiceClient client = new CityWeatherServiceClient();
            var cityWeather = await client.GetWatherByCityCountryName(cityName, countryName);

            //the above will always return Data Not Found as the service data not available
            //so mock the data for mow
            return new CityWeather
            {
                Location = cityName,
                Time = DateTime.Now.ToShortDateString(),
                Wind = "mock wind",
                Visibility = "mock visibility",
                SkyConditions = "mock skyConditions",
                Temperature = "mock temperature",
                DewPoing = "mock dewPoing",
                Humidity = "mock humidity",
                Pressure = "mock pressure"
            };
        }
    }
}