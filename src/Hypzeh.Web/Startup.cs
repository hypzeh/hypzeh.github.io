using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace Hypzeh.Web
{
	public class Startup
	{
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddSpaStaticFiles(options =>
			{
				options.RootPath = "wwwroot";
			});
		}

		public void Configure(IApplicationBuilder application)
		{
			application.UseHsts();
			application.UseHttpsRedirection();
			application.UseStaticFiles();
			application.UseSpaStaticFiles();
			application.UseSpa(spa =>
			{
				spa.Options.SourcePath = ".";
			});
		}
	}
}
