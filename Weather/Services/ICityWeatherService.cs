using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Weather.WebServices.Models;

namespace Weather.Services
{
    public interface ICityWeatherService
    {
        Task<List<Table>> GetCitiesByCountryName(string countyName);

        Task<CityWeather> GetWatherByCityCountryName(string cityName, string countyName);
    }
}
