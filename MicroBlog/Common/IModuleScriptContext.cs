using Microsoft.AspNetCore.Html;

namespace MicroBlog.Web.Common
{
    public interface IModuleScriptContext
    {
        void Add(long moduleDefinitionId, string content);

        IHtmlContent Render();
    }
}