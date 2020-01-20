/// <reference path="./../Typedef/jquery.d.ts" />
var microBlog;
(function (microBlog) {
    var portal;
    (function (portal) {
        var appSettings = /** @class */ (function () {
            function appSettings() {
            }
            appSettings.shortDateFormat = 'DD/MM/YYYY';
            return appSettings;
        }());
        portal.appSettings = appSettings;
    })(portal = microBlog.portal || (microBlog.portal = {}));
})(microBlog || (microBlog = {}));
//# sourceMappingURL=appsettings.js.map