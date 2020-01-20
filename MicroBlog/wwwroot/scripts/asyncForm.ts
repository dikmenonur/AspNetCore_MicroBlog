/// <reference path="./../Typedef/jquery.d.ts" />
/// <reference path="./../Typedef/cms.d.ts" />
namespace microBlog {
    export namespace portal {
        export class asyncForm {
            public static initialize(): void {
                //jQuery('input.datepicker').datepicker({ dateFormat: 'dd-mm-yyyy' });
                jQuery('form').each((idx, elem) => {
                    asyncForm.tryAttachToFormSubmit(idx, elem);
                });
            }

            private static tryAttachToFormSubmit(index: number, element: Element): void {
                let jForm: JQuery = jQuery(element);

                if (jForm.data('cms-async-form')) {
                    jForm.on('submit', asyncForm.asyncFormOnSubmit);
                }
            }

            private static asyncFormOnSubmit(e: JQueryEventObject): boolean {
                e.preventDefault();

                var formData = new FormData(e.target as HTMLFormElement);
                var jTarget = jQuery(e.target);
                var action = jTarget.attr('action');

                jQuery.ajax({
                    url: action,
                    type: 'POST',
                    data: formData,
                    cache: false,
                    contentType: false,
                    processData: false
                }).done((data, status, xhr) => {
                    let contentType: string = xhr.getResponseHeader('content-type');
                    if (-1 < contentType.indexOf('text/html')) {
                        jTarget.html(data);
                    }
                });

                return false;
            }
        }
    }
}


jQuery(() => {
    microBlog.portal.asyncForm.initialize();
});