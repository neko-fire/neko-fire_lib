/***
* Neko-Fire Library
*
* requires: jQuery 1.6+
* @author: Martin Bayer
* neko-fire.com
*
*
* planned features:
* + cookie based theme engine for css
* + customizable gallery in a lightbox
***/

// set up vars
var NEKO = window.NEKO || {};


// get some user information
NEKO.userConfig = {
	// get browser dimensions
	windowHeight: function() { return $(window).height(); },
	windowWidth: function() { return $(window).width(); },

	docHeight: function() { return $(document).height(); },
	docWidth: function() { return $(document).width(); }
	
};


NEKO.nekoTheme = {};
NEKO.nekoGallery = {};