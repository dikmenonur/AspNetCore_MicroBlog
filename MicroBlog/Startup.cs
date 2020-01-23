using MicroBlog.Mongo.Data;
using MicroBlog.Mongo.Model;
using MicroBlog.Web.Common;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;

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
            services.AddControllersWithViews();
            services.AddRazorPages().AddMvcOptions(options => options.EnableEndpointRouting = false);

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
                configuration.RootPath = "AngularApp/dist";
            });
            //services.Configure<RazorViewEngineOptions>(options =>
            //{
            //    options.ViewLocationFormats.Clear();
            //    options.AreaViewLocationFormats.Clear();
            //    // not well known since we dont want to write views here
            //    options.ViewLocationFormats.Add($"{{1}}/Views/{{0}}{RazorViewEngine.ViewExtension}");
            //    options.AreaViewLocationFormats.Add($"{{1}}/Views/{{0}}{RazorViewEngine.ViewExtension}");
            //});
            services.AddScoped<IModuleScriptContext, ModuleScriptContext>();
            services.AddTransient<IMongoRepository, MongoRepository>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }


            app.UseCors("CorsPolicy");
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapRazorPages();
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "AngularApp";

                if (env.IsDevelopment())
                {
                    //spa.UseAngularCliServer(npmScript: "start");
                    spa.UseProxyToSpaDevelopmentServer("http://localhost:4200");
                    spa.Options.StartupTimeout = TimeSpan.FromSeconds(200); // <-- add this line
                }
            });
        }
    }
}
