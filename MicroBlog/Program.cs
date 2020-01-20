using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace MicroBlog
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string wwwrootPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
            CreateWebHostBuilder(args, wwwrootPath).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args, string staticContentPath) =>
           WebHost.CreateDefaultBuilder(args)
               .UseUrls("http://0.0.0.0:5000", "https://0.0.0.0:5001")
               .ConfigureAppConfiguration((context, builder) =>
               {
                   builder.SetBasePath(Directory.GetCurrentDirectory());
               })
               .UseWebRoot(staticContentPath)
               .ConfigureKestrel(options =>
               {
                   options.AddServerHeader = false;
               })
               .UseStartup<Startup>();
    }
}
