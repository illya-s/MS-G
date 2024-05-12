$(document).ready(function() {
	var userAgent = navigator.userAgent.toLowerCase();
	if (userAgent.indexOf('firefox') > -1) {
		$("html").css("scrollbar-width", "thin")
		$("html").css("scrollbar-color", "var(--hd-color) var(--fc-body)")
	}

	VANTA.RINGS({
		el: "#intro",
		mouseControls: true,
		touchControls: true,
		gyroControls: true,
		scale: 1.00,
		scaleMobile: 1.00
	})
});
