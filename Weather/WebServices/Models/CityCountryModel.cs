using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Weather.WebServices.Models
{
    
    public class Table
    {
        public string Country { get; set; }
        public string City { get; set; }
    }


    public class CityWeather
    {
        public string Location { get; set; }
        public string Time { get; set; }
        public string Wind { get; set; }
        public string Visibility { get; set; }
        public string SkyConditions { get; set; }
        public string Temperature { get; set; }
        public string DewPoing { get; set; }
        public string Humidity { get; set; }
        public string Pressure { get; set; }
    }





}