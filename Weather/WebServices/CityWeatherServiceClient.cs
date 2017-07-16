using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Weather.ExternalServices;
using Weather.Services.Utils;
using Weather.WebServices.Models;

namespace Weather.WebServices
{
    public class CityWeatherServiceClient
    {
        private readonly string globalWeatherSoap = "GlobalWeatherSoap";


        public async Task<List<Table>> GetWeatherByCountryName(string country)
        {
            string cities = string.Empty;
            var soapClient = new GlobalWeatherSoapClient(globalWeatherSoap);  
            cities = await soapClient.GetCitiesByCountryAsync(country);

            //string is returned in xml format
            return StringConvert.ConvertXmlStringIntoObject(cities);
        }
         

        public async Task<string> GetWatherByCityCountryName(string city, string country)
        {
            string cityWeather = string.Empty;
            try
            {
                var soapClient = new GlobalWeatherSoapClient(globalWeatherSoap);
                cityWeather = await soapClient.GetWeatherAsync(city, country);
            }
            catch (Exception e)
            {
                //log here in case ws down.
            }

            return cityWeather;
        }


    }
}