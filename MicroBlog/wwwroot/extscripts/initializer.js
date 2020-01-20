var alertIcons;

var initializers = {

	isAppInitialized: false,

	initializeValidators: function () {
		$('form').each(function (index, item) {
			var jItem = $(item);
			jItem.removeData("validator") /* added by the raw jquery.validate plugin */
				.removeData("unobtrusiveValidation");  /* added by the jquery unobtrusive plugin*/
			$.validator.unobtrusive.parse(jItem);
		});
	},

	initializeDatePickers: function () {
		if ($('input.datepicker').datepicker) {
			$('input.datepicker').each((index, item) => {
				$(item).datepicker('destroy');
				$(item).datepicker({
					uiLibrary: 'bootstrap4',
					iconsLibrary: 'material',
					locale: 'tr-tr',
					format: microBlog.portal.appSettings.shortDateFormat.toLowerCase()
				});
			});

		}
	},

	initializeMenu: function () {
		$("ul.dropdown-menu [data-toggle='dropdown']").on("click", function (event) {
			event.preventDefault();
			event.stopPropagation();

			$(this).siblings().toggleClass("show");


			if (!$(this).next().hasClass('show')) {
				$(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
			}
			$(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
				$('.dropdown-submenu .show').removeClass("show");
			});

		});
	},

	initializeDatePrototypes: function () {
		Date.prototype.formatDate = function (format) {
			if (format) format = format.toUpperCase();
			var date = this;
			var day = date.getDate().toString();
			var month = (1 + date.getMonth()).toString();
			var year = date.getFullYear().toString();

			var output = new String(format);

			output = output
				.replace('YYYY', year)
				.replace('YY', year.substr(2, 2))
				.replace('MM', 1 == month.length ? '0' + month : month)
				.replace('DD', 1 == day.length ? '0' + day : day);

			return output;
		}
	},

	raiseInitializedEvent: function () {
		var cmsAppLoaded = new Event('cmsAppLoaded');
		document.dispatchEvent(cmsAppLoaded);
		window.isAppInitialized = true;
	}
};

(function () {


	if ($) {
		function showBusyOverlay() {
			$('#busyOverlay').show();
		}

		function hideBusyOverlay() {
			$('#busyOverlay').hide();
		}

		$(function () {

			if ($('[data-toggle="tooltip"]').tooltip) {
				$('[data-toggle="tooltip"]').tooltip();
			}

			initializers.initializeDatePrototypes();
			//initializers.initializeDatePickers();
			initializers.initializeMenu();

			$(":input").inputmask();

			$.validator.setDefaults({
				validClass: 'is-valid',
				ignore: ':hidden,note-editor *',
				success: function (element) {
					element.addClass('is-valid');
				},
				highlight: function (element) {
					$(element).addClass('is-invalid');
				},
				unhighlight: function (element) {
					$(element).addClass('is-valid');
					$(element).removeClass('is-invalid');
				}
			});

			$(document).ajaxStart(function () {
				showBusyOverlay();
			});

			$(document).ajaxComplete(function (e, xhr) {
				hideBusyOverlay();
				var contentTypeHeader = xhr.getResponseHeader('content-type');
				if (contentTypeHeader && 0 === contentTypeHeader.indexOf('text/html')) {

					initializers.initializeValidators();
					//initializers.initializeDatePickers();

				}
			});

			window.legacyConfirm = window.confirm;
			window.legacyAlert = window.alert;

			window.alert = function (msg, title, alertIcons, params, callback) {
				var title = (title) ? title : "";
				var icon = (alertIcons) ? alertIcons : "info";
				swal($.extend({
					title: title,
					text: msg,
					icon: icon
				},
					params || {})
				).then(() => {
					if (callback) callback();
				});
			};

			window.confirm = function (msg, title, alertIcons, callback, params) {
				var title = (title) ? title : "";
				var icon = (alertIcons) ? alertIcons : "warning";
				swal($.extend({
					title: title,
					text: msg,
					icon: icon,
					buttons: {
						cancel: {
							text: "İptal",
							value: false,
							visible: true,
							//className: "",
							closeModal: true
						},
						confirm: {
							text: "Tamam",
							value: true,
							visible: true,
							//className: "",
							closeModal: true
						}
					},
					dangerMode: true
				},
					params || {})
				).then(
					(isConfirm) => {

						if (isConfirm) callback(isConfirm);

						return isConfirm;

					});
			};
		});
		$(window).on('load', initializers.initializeValidators);
	}

	initializers.raiseInitializedEvent();
}
)();

(function (alertIcons) {
	alertIcons["warning"] = "warning";
	alertIcons["success"] = "success";
	alertIcons["info"] = "info";
	alertIcons["error"] = "error";
})(alertIcons || (alertIcons = {}));