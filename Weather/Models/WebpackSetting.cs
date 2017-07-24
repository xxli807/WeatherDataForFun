using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Weather.Models
{
    public class WebpackSetting
    {
        public Assets App { get; set; }

        public Assets Vendor { get; set; }

        public class Assets
        {
            public string Js { get; set; }

            public string Css { get; set; }
        }
    }
}