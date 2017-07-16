using Ninject.Modules;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Weather.Services;

namespace Weather.DI
{

    public class DIConfig : NinjectModule
    {
        public override void Load()
        {
            Bind<ICityWeatherService>().To<CityWeatherService>();
        }
    }
}