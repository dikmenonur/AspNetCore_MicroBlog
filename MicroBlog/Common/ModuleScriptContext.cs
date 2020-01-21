using Microsoft.AspNetCore.Html;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MicroBlog.Web.Common
{
    public class ModuleScriptContext : IModuleScriptContext
    {
        private readonly Dictionary<long, List<string>> ContentBag = new Dictionary<long, List<string>>();

        public void Add(long moduleDefinitionId, string content)
        {
            if (0 >= moduleDefinitionId || string.IsNullOrWhiteSpace(content)) return;

            content = content.Trim();

            if (!this.ContentBag.ContainsKey(moduleDefinitionId))
            {
                this.ContentBag.Add(moduleDefinitionId, new List<string>());
            }

            if (this.ContentBag[moduleDefinitionId].Any(c => 0 == string.Compare(c, content, StringComparison.OrdinalIgnoreCase)))
                return;

            this.ContentBag[moduleDefinitionId].Add(content);
        }

        public IHtmlContent Render()
        {
            HtmlContentBuilder builder = new HtmlContentBuilder();

            foreach (var entry in this.ContentBag)
            {
                foreach (var content in entry.Value)
                {
                    builder.AppendHtmlLine(content);
                }
            }

            return builder;
        }
    }
}