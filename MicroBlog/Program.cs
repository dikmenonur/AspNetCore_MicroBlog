using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using System.IO;

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
               .UseWebRoot(staticContentPath).
                UseKestrel(serverOptions =>
                {
                    // Set properties and call methods on options
                })
                .UseIISIntegration()
                .UseStartup<Startup>();
    }
}
