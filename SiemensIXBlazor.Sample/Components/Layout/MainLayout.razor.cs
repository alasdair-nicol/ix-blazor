using SiemensIXBlazor.Components;
using SiemensIXBlazor.Objects.Application;

namespace SiemensIXBlazor.Sample.Components.Layout;

public partial class MainLayout
{
    private Application _app;

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            AppSwitchConfig config = new()
            {
                CurrentAppId = "1",
                Apps =
                [
                    new SiemensIXBlazor.Objects.Application.App()
                    {
                        Id = "App1",
                        Name = "App 1",
                        Description = "Awesome app",
                        Url = "app1",
                        Target = "_self",
                        IconSrc = "logo.svg"
                    }
                ]
            };

            _app.AppSwitchConfig = config;
        }
    }
}