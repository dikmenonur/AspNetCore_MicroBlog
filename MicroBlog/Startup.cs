using System;
using System.Linq;
using MicroBlog.Mongo.Data;
using MicroBlog.Mongo.Model;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.AspNetCore.Mvc.Razor;

namespace MicroBlog
{
    public class Startup
    {
        public IConfiguration Configuration { get; }
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvcCore(option => option.EnableEndpointRouting = false);
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy", builder => builder.AllowAnyOrigin()
                                                            .AllowAnyMethod()
                                                            .AllowAnyHeader());
            });
            services.Configure<Settings>(options =>
            {
                options.ConnectionString = Configuration.GetSection("MongoConnection:ConnectionString").Value;
                options.Database = Configuration.GetSection("MongoConnection:Database").Value;
            });
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });

            services.Configure<RazorViewEngineOptions>(options =>
            {
                options.ViewLocationFormats.Clear();
                options.AreaViewLocationFormats.Clear();
                // not well known since we dont want to write views here
                options.ViewLocationFormats.Add($"{{1}}/Views/{{0}}{RazorViewEngine.ViewExtension}");
                options.AreaViewLocationFormats.Add($"{{1}}/Views/{{0}}{RazorViewEngine.ViewExtension}");
            });

            services.AddTransient<IMongoRepository, MongoRepository>();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors("CorsPolicy");
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
