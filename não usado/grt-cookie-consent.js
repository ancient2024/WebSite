/*!
 * GRT Cookie Consent - jQuery Plugin
 * Version: 1.0
 * Author: GRT107
 *
 * Copyright (c) 2020 GRT107
 * Released under the MIT license
*/

(function ($) {

	$.fn.grtCookie = function (options) {

		// Default options
		var settings = $.extend({
			duration: 365
		}, options);

		// Check cookie
		if (!(document.cookie.indexOf("acceptgrt=0") > -1)) {

			// Show message and calculate date
			this.addClass("grt-cookie-active");
			var d1 = new Date();
			var days1 = settings.duration;
			d1.setTime(d1.getTime() + days1 * 24 * 60 * 60 * 1000);
			var expiredate = "expires=" + d1.toUTCString();
			document.cookie = "acceptgrt=1;" + expiredate + ";path=/";

			// On click accept button
			$(".grt-cookie-button").on("click", function () {
				$(this).parent().remove();
				document.cookie = "acceptgrt=0;" + expiredate + ";path=/";
			});

		} else {

			this.remove();

		}

		return this;

	};

}(jQuery));

$(document).delegate('#close-cookies', 'click', function(event) {
    event.preventDefault();

    jQuery('.modal-cookie').addClass('d-none');
});

$(function() {
    $('[data-bs-toggle="tooltip"]').tooltip({
        container: '.page'
    })

    $(".grt-cookie").grtCookie({
        // Main text and background color
       // textcolor: "#333",
       // background: "#FFCD69",
        // Button colors
      //  buttonbackground: "#c40b14",
      //  buttontextcolor: "#fff",
        // Duration in days
        duration: 90,
    });
})

v
