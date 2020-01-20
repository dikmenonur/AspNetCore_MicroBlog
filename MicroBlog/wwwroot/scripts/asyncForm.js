/// <reference path="./../Typedef/jquery.d.ts" />
/// <reference path="./../Typedef/cms.d.ts" />
var microBlog;
(function (microBlog) {
    var portal;
    (function (portal) {
        var asyncForm = /** @class */ (function () {
            function asyncForm() {
            }
            asyncForm.initialize = function () {
                //jQuery('input.datepicker').datepicker({ dateFormat: 'dd-mm-yyyy' });
                jQuery('form').each(function (idx, elem) {
                    asyncForm.tryAttachToFormSubmit(idx, elem);
                });
            };
            asyncForm.tryAttachToFormSubmit = function (index, element) {
                var jForm = jQuery(element);
                if (jForm.data('cms-async-form')) {
                    jForm.on('submit', asyncForm.asyncFormOnSubmit);
                }
            };
            asyncForm.asyncFormOnSubmit = function (e) {
                e.preventDefault();
                var formData = new FormData(e.target);
                var jTarget = jQuery(e.target);
                var action = jTarget.attr('action');
                jQuery.ajax({
                    url: action,
                    type: 'POST',
                    data: formData,
                    cache: false,
                    contentType: false,
                    processData: false
                }).done(function (data, status, xhr) {
                    var contentType = xhr.getResponseHeader('content-type');
                    if (-1 < contentType.indexOf('text/html')) {
                        jTarget.html(data);
                    }
                });
                return false;
            };
            return asyncForm;
        }());
        portal.asyncForm = asyncForm;
    })(portal = microBlog.portal || (microBlog.portal = {}));
})(microBlog || (microBlog = {}));
jQuery(function () {
    microBlog.portal.asyncForm.initialize();
});
//# sourceMappingURL=asyncForm.js.map