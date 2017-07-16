using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Weather.Services;

namespace Weather.Controllers
{
    public class HomeController : Controller
    {
        private readonly ICityWeatherService _weatherService;

        public HomeController(ICityWeatherService weatherService)
        {
            _weatherService = weatherService;
        }


        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async Task<JsonResult> GetCitiesByCountry(string countryName)
        {
            var countryCities = await _weatherService.GetCitiesByCountryName(countryName);
            var cities = countryCities.Select(d => d.City).ToList();
             
            return Json(new
            {
                cities = cities ?? new List<string>()
            }, JsonRequestBehavior.AllowGet);

        }

        [HttpGet]
        public async Task<JsonResult> GetWeatherByCity(string cityName, string countryName)
        {

            var cityWeather = await _weatherService.GetWatherByCityCountryName(cityName, countryName);
            return Json(new
            {
                cityWeather
            }, JsonRequestBehavior.AllowGet);
        }

    }
}