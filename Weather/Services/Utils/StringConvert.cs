using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Xml.Serialization;
using Weather.WebServices.Models;

namespace Weather.Services.Utils
{
    public static class StringConvert
    {
        public static List<Table> ConvertXmlStringIntoObject(string cityCountries)
        {
            var cityCountryTables = new List<Table>();
            try
            {
                var reader = new StringReader(cityCountries);
                var serializer = new XmlSerializer(typeof(List<Table>), new XmlRootAttribute("NewDataSet"));
                cityCountryTables = (List<Table>)serializer.Deserialize(reader);
            }
            catch (Exception ex)
            {
                //todo: add the log here
            }
            return cityCountryTables;
        }



    }
}