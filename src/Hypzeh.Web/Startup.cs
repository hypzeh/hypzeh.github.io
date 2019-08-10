using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace Hypzeh.Web
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "wwwroot";
            });
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseHttpsRedirection();
            app.UseDefaultFiles();
            app.UseSpaStaticFiles();
            app.UseSpa(configuration =>
            {
                configuration.Options.SourcePath = ".";
            });
        }
    }
}
