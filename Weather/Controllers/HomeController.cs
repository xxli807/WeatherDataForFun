using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Weather.Models;
using Weather.Services;

namespace Weather.Controllers
{
    public class HomeController : Controller
    {
        // just used as the entry point 
        public ActionResult Index()
        {
            //use the assertJson to load the js/css
            var assetsJson = Path.Combine(System.Web.HttpContext.Current.Server.MapPath("~/Dist/"), "webpack-assets.json");
            var assertModel = JsonConvert.DeserializeObject<WebpackSetting>(System.IO.File.ReadAllText(assetsJson));
            return View(assertModel);
        }

 
    }
}