using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;
using Weather.Controllers;
using Weather.Services;
using Weather.Services.Utils;
using Weather.WebServices.Models;

namespace WeatherTest
{
    [TestClass]
    public class WeatherTest
    {  
        [TestMethod]
        public async Task GetCityByCountryName()
        {
            var tables = new List<Table>()
            {
                new Table() {City="A", Country="B" },
                new Table() {City ="a", Country="B" }
            };

            var mockSerive = new Mock<ICityWeatherService>();
            mockSerive.Setup(d => d.GetCitiesByCountryName("B")).Returns(Task.FromResult(tables));

            var homeController = new HomeController(mockSerive.Object);
            var jsonResult = await homeController.GetCitiesByCountry("B");
              
            Assert.IsNotNull(jsonResult.Data); 

        }




        [TestMethod]
        public void ConvertStringToObject()
        {

            var xmlStr = "<NewDataSet><Table><Country>Australia</Country><City>Archerfield Aerodrome</City></Table><Table><Country>Australia</Country><City>Amberley Aerodrome</City></Table></NewDataSet>";

            var reader = new StringReader(xmlStr);
            var serializer = new XmlSerializer(typeof(List<Table>), new XmlRootAttribute("NewDataSet"));
            var cityCountries = (List<Table>)serializer.Deserialize(reader);

            Assert.AreNotEqual(cityCountries, null);
        }


        [TestMethod]
        public void StringConvertTest()
        {
            var xmlStr = "<NewDataSet><Table><Country>Australia</Country><City>Archerfield Aerodrome</City></Table><Table><Country>Australia</Country><City>Amberley Aerodrome</City></Table></NewDataSet>";
            var result = StringConvert.ConvertXmlStringIntoObject(xmlStr);
            Assert.AreEqual(result.Count, 2);
        }

        
    }
}
