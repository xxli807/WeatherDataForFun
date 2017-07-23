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
        // just used as the entry point 
        public ActionResult Index()
        {
            return View();
        }


    }
}